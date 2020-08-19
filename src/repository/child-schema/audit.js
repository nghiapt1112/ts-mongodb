const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    createdBy: {
        type: Schema.Types.String
    },
    createdDate: {
        type: Schema.Types.Number
    },
    updatedBy: {
        type: Schema.Types.String
    },
    updatedDate: {
        type: Schema.Types.Number
    },
});