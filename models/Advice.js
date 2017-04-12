const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('Advice', {
    content: {
        type: Sequelize.STRING,
        field: 'content',
        allowNull: false
    }
  }, {
      freezeTableName: true
  });
};
