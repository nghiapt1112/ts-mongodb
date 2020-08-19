const repository = require('../repository');
const messages = require('../constant/messages')

module.exports.findOne = async function (query) {
    if (!query) {
        return Promise.reject(messages.ERROR.DATA_REQUEST_INVALID);
    }
    // return repository.user.increaseOrDecreaseAppliedCount(query);
    return new Promise((resolve, reject) => {
        repository.UserA.increaseOrDecreaseAppliedCount(query).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        });
    });
};