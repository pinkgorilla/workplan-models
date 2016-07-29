if (process.env.NODE_ENV == 'production') {
    exports = {};
}
else {

    var should = require('should');

    var validatePeriod = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('month');
        data.month.should.instanceof(String);

        data.should.have.property('period');
        data.period.should.be.Number();

        data.should.have.property('from');
        data.from.should.be.Date();

        data.should.have.property('to');
        data.to.should.be.Date();
    };

    exports.period = validatePeriod;
}