'use strict'
var MongoModel = require('capital-models').MongoModel;

module.exports = class UserWorkplanItem extends MongoModel {

    constructor(source) {
        super('user-workplan-item', "1.0.0");

        this.userWorkplanId = '';

        this.code = '';
        this.no = 0;
        this.type = '';
        this.name = '';
        this.description = '';
        this.estimatedDate = '';
        this.done = false;
        this.completedDate = '';
        this.cancel = false;
        this.cancelReason = '';



        this.copy(source); 
    }
}