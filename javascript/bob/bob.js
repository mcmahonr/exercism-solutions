var Bob = function(){};

Bob.prototype.hey = function(message){
    message = message.trim();
    if(!message) {
        return 'Fine. Be that way!';
    }

    if(/[A-Z]/.test(message) && !(/[a-z]/.test(message))) {
        return 'Whoa, chill out!';
    }

    if(message.endsWith('?')) {
        return 'Sure.'
    }

    return 'Whatever.'
};

module.exports = Bob;