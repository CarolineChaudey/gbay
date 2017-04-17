const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('Advice', {
    adviceId: {
      type: Sequelize.UUID,
      field: 'adviceId',
      primaryKey: true
    },
    content: {
        type: Sequelize.STRING,
        field: 'content',
        allowNull: false
    }
  });
};
