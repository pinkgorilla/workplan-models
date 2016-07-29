var test = function(name, path) {
    describe(name, function() {
        require(path);
    })
}

var validate = require('./validator');

it("#01. Period should valid", function() {
    var Period = require('../src/period');
    validate.period(new Period());
})
