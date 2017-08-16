var Gigasecond = function(startDate) {
    this.gigaSecondDate = new Date();
    this.gigaSecondDate.setTime(startDate.valueOf() + 1000000000 * 1000);
};

Gigasecond.prototype.date = function() {
    return this.gigaSecondDate;
}

module.exports = Gigasecond;