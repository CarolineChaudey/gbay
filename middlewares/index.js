
module.exports = (api) => {
    api.middlewares = {
        bodyParser: require('body-parser'),
        ensureUserFields: require('./ensureUserFields.js')
    };
};
