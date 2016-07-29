'use strict' 
var BaseModel = require('capital-models').BaseModel;

module.exports = class Period extends BaseModel{
    constructor(source) {
        super('period', '1.0.0');
        this.month = '';
        this.period = 1;
        this.from = new Date();        
        this.to = new Date();
        this.closed = false;


        this.copy(source); 
    }
}
 