const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('Advice', {
    adviceId: {
      type: Sequelize.UUID,
      field: 'adviceId',
      primaryKey: true
    },
    opinion: {
        type: Sequelize.STRING,
        field: 'opinion',
        allowNull: false
    }
  }, {
    tableName: 'Advice'
  });
};
