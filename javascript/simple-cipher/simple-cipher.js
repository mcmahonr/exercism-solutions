
// Constructor
var Cipher = function(key) {
    if (!/^[a-z]+$/.test(key)) {
        throw Error('Bad key');
    }
    this.key = key || generateKey();
};

// Private functions
var generateKey = function(length = 100) {
    var key = [];
    for (i = 0; i < length; i++) {
        key.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    }
    return key.join('');
};

/*
 * I would have really liked to do this with a cryptographically generated random number
 * however the window object wasn't available during the tests. 
var generateLowerChar = function() {
    var buffer = new Uint8Array(1);
    window.crypto.getRandomValues(buffer);

    var number = buffer[0] / (0xffffffff + 1);

    return String.fromCharCode(97 + Math.floor(number * 26));
};

*/
var shiftChars = function(message, self, forward = true) {
    var cipher = message.split('').map(function(value, index, array) {
        var keyShift = self.key[index].charCodeAt(0) - 97;
        if(forward) {
            var newCharCode = value.charCodeAt(0) + keyShift;
            if (newCharCode > 122) {
                newCharCode = 96 + (newCharCode - 122);
            }
            return String.fromCharCode(newCharCode);
        } else {
            var newCharCode = value.charCodeAt(0) - keyShift;
            if (newCharCode < 97) {
                newCharCode = 123 - (97 - newCharCode);
            }
            return String.fromCharCode(newCharCode);
        }
    });
    return cipher.join('');
};

// End private functions

// Public functions
Cipher.prototype.encode = function(message) {
    return shiftChars(message, this, true);
};

Cipher.prototype.decode = function(cipher) {
    return shiftChars(cipher, this, false);
};

// End public functions

module.exports = Cipher;