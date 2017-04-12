const bluebird = require('bluebird');
var Sequelize = require('sequelize');
const path = './entities/';

module.exports = (server) => {
    server.connection = new Sequelize(server.settings.db.url); // to add in settings

    server.models = {
        Advice: require(path + 'Advice')(server),
        Category: require(path + 'Category')(server),
        Product: require(path + 'Product')(server),
        Role: require(path + 'Role')(server),
        //Token: require('Token')(server), à voir après
        User: require(path + 'User')(server)
    }
    console.log('Models created.');


    require('./relations.js')(server);
    console.log('Relations between models set.');

    /*
    for (var m in server.models) {
      console.log(m);
      m.sync();
    }
    console.log('Successful model sync.');
    */
};
