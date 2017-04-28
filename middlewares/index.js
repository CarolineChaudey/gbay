
module.exports = (api) => {
    api.middlewares = {
        bodyParser: require('body-parser'),
        ensureUserFields: require('./ensureUserFields.js'),
        checkUserCredentials: require('./checkUserCredentials.js')(api)
    };
};
