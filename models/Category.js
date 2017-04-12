const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('Category', {
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    }
  }, {
      freezeTableName: true
  });
};
