'use strict'
var BaseModel = require('capital-models').BaseModel;
var Period = require('./period');

module.exports = class UserWorkplan extends BaseModel{
    
    constructor(source){
        super('user-workplan', "1.0.0");
        this.accountId = '';
        this.user = {};
                
        this.periodId = '';
        this.period = new Period();
        
        this.code = '';
        this.items = [];
        this.completion = 0;
        


        this.copy(source); 
    }
}