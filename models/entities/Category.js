const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('Category', {
    title: {
        type: Sequelize.STRING,
        field: 'title',
        primaryKey: true
    }
  }, {
    tableName: 'Category'
  });
};
