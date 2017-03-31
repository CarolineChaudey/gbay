const mongoose = require('mongoose');
const bluebird = require('bluebird');

module.exports = (server) => {
    server.mongoose = mongoose.connect(server.settings.db.url);
    server.mongoose.Promise = bluebird;
    server.models = {
        Advice: require('./Advice')(server),
        Product: require('./Product')(server),
        Role: require('./Role')(server),
        Token: require('./Token')(server),
        User: require('./User')(server),
    }
};
