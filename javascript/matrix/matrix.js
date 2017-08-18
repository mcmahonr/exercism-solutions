var Matrix = function(input) {
    var self = this;

    self.rows = input.split('\n').map(function(value, index, array) {
        return value.split(' ').map(function(v, i, a) {
            return Number(v);
        });
    });
    
    
    self.columns = self.rows[0].map(function(value, index, array) {
        return self.rows.map(function (row){
            return row[index];
        });
    });
};


module.exports = Matrix;