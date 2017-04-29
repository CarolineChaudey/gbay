
module.exports = (api) => {
    api.middlewares = {
        bodyParser: require('body-parser'),
        ensureUserFields: require('./ensureUserFields.js'),
        checkUserCredentials: require('./checkUserCredentials.js')(api),
        checkUserToken: require('./checkUserToken.js')(api),
        checkUserOrAdminRights: require('./checkUserOrAdminRights.js')(api),
        checkUserRights: require('./checkUserRights.js')(api),
        ensureProductFields: require('./ensureProductFields')
    };
};
