const Sequelize = require('sequelize');

module.exports = (api) => {

  return api.connection.define('Product', {
    name: {
      type: Sequelize.STRING,
      field: 'name',
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      field: 'description',
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT(2, 2),
      field: 'price',
      allowNull: false // au moins un prix de départ
    },
    mark: {
      type: Sequelize.INTEGER,
      field: 'mark',
      allowNull: true
    },
    biddingStart: {
      type: Sequelize.DATE,
      field: 'biddingStart',
      allowNull: true
    },
    biddingEnd: {
      type: Sequelize.DATE,
      field: 'biddingEnd',
      allowNull: true
    }
  }, {
      freezeTableName: true
  });
};
/*
module.exports = (api) => {
    const schema = new Schema({
      ....
      vendeurId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      acheteurId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },
      CategoriesId: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }]
    });

}
