var Triangle = function(numberOfRows) {
    this.rows = [];
    
    while (this.rows.length < numberOfRows) {
        if(this.rows.length === 0) {
            this.rows.push([1]);
        } else {
            this.rows.push(calculateNextRow(this.rows[this.rows.length - 1]));
        }
    }

    this.lastRow = this.rows[this.rows.length - 1];
};

var calculateNextRow = function(lastRow) {   
    var newRow = [1];
    
    for (var i = 1; i < lastRow.length; i++) {
        newRow.push(lastRow[i] + lastRow[i - 1]);
    }

    newRow.push(1);
    return newRow;
};



module.exports = Triangle; 