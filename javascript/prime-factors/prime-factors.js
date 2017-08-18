module.exports = {
    for: function (input) {
        if (isNaN(input) || input % 1 || !isFinite(input)) {
            return [];
        }
        
        var primeFactors = [];
        var currentFactor = 2;
        while (input > 1 && currentFactor <= input) {
            if (input % currentFactor === 0){
                primeFactors.push(currentFactor);
                input /= currentFactor;
            } else {
                if(currentFactor === 2) {
                    currentFactor++;
                } else {
                    currentFactor += 2;
                }
            }
        }

        return primeFactors;
    }
};