const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('User', {
    userId: {
      type: Sequelize.UUID,
      field: 'userId',
      primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      field: 'password',
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      field: 'address',
      allowNull: false
    },
    nbCredits: {
      type: Sequelize.FLOAT,
      field: 'nbCredits',
      allowNull: false,
      defaultValue: 0
    }
  });
};
