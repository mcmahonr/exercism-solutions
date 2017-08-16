var Pangram = function(sentence) {
    this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {
    var charsUsed = [];
    for ( var i = 0; i < this.sentence.length; i++ ) {
        var currentChar = this.sentence[i].toLowerCase();
        if(/[a-z]/.test(currentChar) && charsUsed.indexOf(currentChar) === -1) {
            charsUsed.push(currentChar);
        }
    }
    return charsUsed.length === 26;
};


module.exports = Pangram;