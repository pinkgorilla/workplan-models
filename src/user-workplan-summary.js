'use strict'
var Period = require('./period');
var MongoModel = require('capital-models').MongoModel;

module.exports = class UserWorkplanSummary extends MongoModel {

    constructor(source) {
        super('user-workplan', "1.0.0");
        this.accountId = '';
        this.user = {};

        this.periodId = '';
        this.period = new Period();

        this.code = '';

        this.total = 0;
        this.done = 0;
        this.cancel = 0;
        this.completion = 0;

        this.copy(source); 
    }
}