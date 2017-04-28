const Sequelize = require('sequelize');
var Tokenify = require('sequelize-tokenify');

module.exports = (api) => {

  let User = api.connection.define('User', {
    userId: {
      type: Sequelize.UUID,
      field: 'userId',
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
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
    userToken: {
      type: Sequelize.STRING,
      unique: true,
      defaultValue: null
    }
  }, {
    tableName: 'User'
  });

  return User;

};
