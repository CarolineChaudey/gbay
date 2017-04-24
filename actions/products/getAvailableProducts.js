
module.exports = (api) => {
  const Product = api.models.Product;
  const Category = api.models.Category;
  const User = api.models.User;

  return function create(req, res, next) {

    let querySettings = {};

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

    // les relations avec les autres tables
    if (req.params.categories) {
      querySettings.include.push({
        model: Category,
        where: {
          title: {
            $in: req.params.categories
        }}
      });
    }
    if (req.params.sellers) {
      querySettings.include.push({
        model: User,
        where: {
          userId: {
            $in: req.params.sellers
        }}
      });
    }

    // pour l'ordre par prix (par date par défaut)
    if (req.params.price) {
      querySettings.order = [
        ['price']
      ];
    } else {
      querySettings.order = [
        ['updatedAt', 'DESC']
      ];
    }

    // pour la pagination
    if (req.params.limit) {
      querySettings.limit = req.params.limit;
    }
    if (req.params.offset) {
      querySettings.offset = req.params.offset;
    }

    Product.findAll(querySettings)
    .then(function(products) {
      if (!products || products.length == 0) {
        return res.status(204).send(products)
      }
      return res.send(products);
    });

}};
