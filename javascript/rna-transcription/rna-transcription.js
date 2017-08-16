var DnaTranscriber = function() {
    this.transcriptionKey = { G: 'C', C: 'G', T: 'A', A: 'U' };
};

DnaTranscriber.prototype.toRna = function(dna) {
    var self = this;
    return dna.split('').map(function(value, index, array) {
        if(!self.transcriptionKey.hasOwnProperty(value)) {
            throw Error('Invalid input');
        }
        return self.transcriptionKey[value];
    }).join('');
};


module.exports=DnaTranscriber;