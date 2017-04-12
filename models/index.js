//const mongoose = require('mongoose');
const bluebird = require('bluebird');
var Sequelize = require('sequelize');

module.exports = (server) => {
    server.connection = new Sequelize(api.settings.db.sql.url); // to add in settings

    server.models = {
        Advice: require('./Advice')(server),
        Category: require('./Category')(server),
        Product: require('./Product')(server),
        Role: require('./Role')(server),
        Token: require('./Token')(server),
        User: require('./User')(server)
    }
    console.log('Models created.');

    for (var m in server.models) {
      m.sync();
    }
    console.log('Successful model syncs.');
};
