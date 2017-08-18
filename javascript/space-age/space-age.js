const RATIOS = {
                    Earth: 31557600,
                    Mercury: 31557600 * 0.2408467,
                    Venus: 31557600 * 0.61519726,
                    Mars: 31557600 * 1.8808158,
                    Jupiter: 31557600 * 11.862615,
                    Saturn: 31557600 * 29.447498,
                    Uranus: 31557600 * 84.016846,
                    Neptune: 31557600 * 164.79132
                };

// Found this on the MDN site 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
var precisionRound = function(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

var SpaceAge = function(seconds, precision = 2) {
    this.seconds = seconds;
    this.precision = precision;
};

SpaceAge.prototype.onEarth = function() {
    return precisionRound(this.seconds / RATIOS.Earth, this.precision);
};

SpaceAge.prototype.onMercury = function() {
    return precisionRound(this.seconds / RATIOS.Mercury, this.precision);
};

SpaceAge.prototype.onVenus = function() {
    return precisionRound(this.seconds / RATIOS.Venus, this.precision);
};

SpaceAge.prototype.onMars = function() {
    return precisionRound(this.seconds / RATIOS.Mars, this.precision);
};

SpaceAge.prototype.onJupiter = function () {
    return precisionRound(this.seconds / RATIOS.Jupiter, this.precision);
};

SpaceAge.prototype.onSaturn = function () {
    return precisionRound(this.seconds / RATIOS.Saturn, this.precision);
};

SpaceAge.prototype.onUranus = function () {
    return precisionRound(this.seconds / RATIOS.Uranus, this.precision);
};

SpaceAge.prototype.onNeptune = function () {
    return precisionRound(this.seconds / RATIOS.Neptune, this.precision);
}; 

module.exports = SpaceAge;