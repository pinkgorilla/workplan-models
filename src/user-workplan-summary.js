'use strict'
var BaseModel = require('capital-models').BaseModel;
var Period = require('./period');  

module.exports = class UserWorkplanSummary extends BaseModel {

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