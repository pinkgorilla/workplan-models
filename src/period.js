'use strict' 
var BaseModel = require('capital-models').BaseModel;

module.exports = class Period extends BaseModel{
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
 