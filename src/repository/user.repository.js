const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const timestamps = require('mongoose-timestamp');
// const deepPopulate = require('z')(mongoose);
const ALIAS_USER = 'UserA';
const TermSchema = require('./child-schema/audit');

const UserSchema = new Schema({
    userName: {
        type: Schema.Types.String
    },
    companyId: {
        type: Schema.Types.String
    },
    appliedCount: {
        type: Schema.Types.Number,
        default: false
    },
    terms: TermSchema
});

// UserSchema.plugin(timestamps);
// UserSchema.plugin(deepPopulate);

UserSchema.statics.insertOne = function (opportunity) {
    let Opportunity = mongoose.model(ALIAS_USER, UserSchema);
    return new Opportunity(opportunity).save();
};

UserSchema.methods.isOwner = function (creatorId, companyId) {
    let isOwner = false;
    if (this.companyId === companyId) {
        isOwner = true;
    }
    return isOwner;
};

UserSchema.methods.increaseOrDecreaseAppliedCount = function (operator) {
    console.log('[DEBUG] operator: ', operator);
    // if (this.appliedCount) {
    //     this.appliedCount = operator === '+' ? (this.appliedCount + 1) : (this.appliedCount - 1);
    // } else {
    //     this.appliedCount = operator === '+' ? 1 : 0;
    // }
    // return this.save();
    return 'nghia saved';
};
module.exports = {
    name: ALIAS_USER,
    schema: UserSchema
};