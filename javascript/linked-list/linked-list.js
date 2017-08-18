'use strict'

var Node = function(data) {
    this.next = null;
    this.previous = null;
    this.data = data;
};

var LinkedList = function () { 
    this.currentNode = null;
    this.nodeCount = 0;
};

LinkedList.prototype.push = function(value) {
    var newNode = new Node(value);
    if(this.currentNode !== null) {
        newNode.previous = this.currentNode;
        newNode.previous.next = newNode;
    } else {
        this.head = newNode;
    }

    this.currentNode = newNode;

    this.nodeCount++;
};

LinkedList.prototype.pop = function() {
    var nodeData = this.currentNode.data;
    this.currentNode = this.currentNode.previous;
    this.nodeCount--;
    return nodeData;
};

LinkedList.prototype.shift = function() {
    var workingNode = this.getHead();
    var returnData = workingNode.data;
    this.head = workingNode.next;
    workingNode = null;
    this.nodeCount--;
    return returnData;
};

LinkedList.prototype.unshift = function(data) {
    var newNode = new Node(data);
    if(this.currentNode === null) {
        this.head = newNode;
        this.currentNode = newNode;
    } else {
        var headNode = this.getHead();
        newNode.next = headNode;
        headNode.previous = newNode;
        this.head = newNode;
    }
    this.nodeCount++;
};

LinkedList.prototype.count = function () {
    return this.nodeCount;
};

LinkedList.prototype.delete = function (value, deleteAll = false) {
    var workingNode = this.currentNode;

    while (workingNode !== null) {
        if(workingNode.data === value) {
            if (workingNode === this.currentNode) {
                if(workingNode.next !== null) {
                    this.currentNode = workingNode.next;
                } else if (workingNode.previous !== null) {
                    this.currentNode = workingNode.previous;
                } else {
                    this.currentNode = null;
                }
            }
            if (workingNode.previous === null) {
                this.head = workingNode.next;
            } else if (workingNode.previous !== null && workingNode.next !== null) {
                workingNode.previous.next = workingNode.previous;
            } else if (workingNode.next === null && workingNode.previous !== null) {
                workingNode.previous.next = null;
            }

            this.nodeCount--;
            if(deleteAll === false) {
                return;
            }
        }
        workingNode = workingNode.previous;
    }
};

//Giggity
LinkedList.prototype.getHead = function() {
    if (this.head !== null) {
        return this.head;
    }

    var workingNode = this.currentNode;
    while(workingNode.previous !== null) {
        workingNode = workingNode.previous;
    }

    this.head = workingNode;
    return workingNode;
};


module.exports = LinkedList;
