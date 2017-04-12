const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('Advice', {
    adviceId: {
      type: Sequelize.UUIDV4,
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
