'use strict'

var MongoModel = require('capital-models').MongoModel;

module.exports = class Period extends MongoModel{
    constructor(source) {
        super('period', '1.0.0');
        this.month = '';
        this.period = '';
        this.from = '';        
        this.to = '';
        this.closed = '';


        this.copy(source); 
    }
}
 