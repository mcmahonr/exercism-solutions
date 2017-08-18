var Binary = function (value) {
    this.value = value;
};

Binary.prototype.toDecimal = function() {
    //Bailout if the value is invalid, it would be better to do something in the constructor
    if (/^[0-1]+$/.test(this.value) === false || this.value === '0') {
        return 0;
    }

    var reversed = this.value.split('').reverse();
    var finalValue = 0;
    for (var i = 0; i < reversed.length; i++) {
        if(reversed[i] === '1') {
            finalValue += Math.pow(2,i);
        }
    }
    
    return finalValue;
};

module.exports = Binary;