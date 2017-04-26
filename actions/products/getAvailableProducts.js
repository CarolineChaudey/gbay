
module.exports = (api) => {
  const Product = api.models.Product;
  const Category = api.models.Category;
  const User = api.models.User;

  return function create(req, res, next) {

    let querySettings = {};

    // test : http://localhost:3000/products/available
    querySettings.where = {
      $or: [
        { // enchere non achevee
          biddingEnd: {
            $gt: new Date()
          }
        }, /* ici normalement l'opérateur OU agit */ {
          // produit en vente mais pas encore achete
          biddingEnd: null,
          buyerUserId: null
        }
      ]
    };

    console.log('Debug : params  = ', req.query);
    // les relations avec les autres tables
    querySettings.include = [];
    if (req.query.categories) {
      querySettings.include.push({
        model: Category,
        where: {
          title: {
            $in: req.query.categories.split(',') // pour convertir en liste js
        }}
      });
    }
    if (req.query.sellers) {
      querySettings.include.push({
        model: User,
        as: 'seller',
        where: {
          userId: {
            $in: req.query.sellers.split(',')
        }}
      });
    }

    // pour l'ordre par prix (par date par défaut)
    // test : http://localhost:3000/products/available?price=asc
    if (req.query.price == 'asc') {
      querySettings.order = [
        ['price']
      ];
    } else {
      querySettings.order = [
        ['updatedAt', 'DESC']
      ];
    }

    // pour la pagination
    // test : http://localhost:3000/products/available?limit=1&page=2
    if (req.query.limit) {
      querySettings.limit = req.query.limit;
    }
    if (req.query.page) {
      querySettings.offset = (req.query.page - 1) * req.query.limit; // (numero de page - 1) * elements par page = elements sautés
    }

    Product.findAll(querySettings)
    .then(function(products) {
      if (!products || products.length == 0) {
        return res.status(204).send(products)
      }
      return res.send(products);
    });

}};
