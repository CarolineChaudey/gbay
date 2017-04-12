const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.connection.define('Role', {
      title: {
          type: Sequelize.STRING,
          field: 'title',
          primaryKey: true
      }
    });
}
