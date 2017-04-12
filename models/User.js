const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('User', {
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
      allowNull: false
    }
  }, {
      freezeTableName: true
  });
};

/*
module.exports = (api) => {
    const schema = new Schema({
      ...
      role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
      },
      produitsVendusId: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }]
    });
}
