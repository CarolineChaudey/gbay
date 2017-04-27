const Sequelize = require('sequelize');
var Tokenify = require('sequelize-tokenify');

module.exports = (api) => {

  return api.connection.define('User', {
    userId: {
      type: Sequelize.UUID,
      field: 'userId',
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    sellerFlag: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false
    },
    pswd: {
      type: Sequelize.STRING,
      field: 'pswd',
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
    },
    token: {
      type: Sequelize.STRING,
      unique: true
    }
  },

  Tokenify.tokenify(User, {
      field: 'token'
  });

  {
    tableName: 'User'
  });
};
