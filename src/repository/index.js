var fs = require('fs');
var path = require('path');
// var config = require('../config').APP;
var mongoose = require('mongoose');
// connect method is deprecated in future
// mongoose.Promise = require('bluebird');
// mongoose.connect(config.database.mongodb, {
//     useMongoClient: true
// }).then(function (db) {
//     process.env.NODE_ENV === 'test' && db.dropDatabase();
// });
mongoose.connect('mongodb://localhost:27017/test', {})
var appRepository = {};
var repositoryPath = path.resolve(__dirname);
fs.readdirSync(repositoryPath).forEach(file => {
    if (file !== 'index.js' && file !== 'child-schema') {
        const schemaInfo = require(path.resolve(__dirname,
            file));
        const model = mongoose.model(schemaInfo.name, schemaInfo.schema);
        appRepository[schemaInfo.name] = model;
    }
});

module.exports = appRepository;