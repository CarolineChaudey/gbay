
module.exports = (api) => {
  const Product = api.models.Product;
  const Category = api.models.Category;

  return function create(req, res, next) {

    let productAvailableCondition = [
      { // enchere non achevee
        biddingEnd: {
          $gt: new Date()
        }
      }, /* ici normalement l'opérateur OU agit */ {
        // produit en vente mais pas encore achete
        biddingEnd: null,
        buyerUserId: null
      }
    ];

    Product.findAll({
      where: {
        $or: productAvailableCondition  // + propre de decomposer la structure
      },
      order: [
        ['updatedAt', 'DESC']
      ]
    }).then(function(products) {
      if (!products || products.length == 0) {
        return res.status(204).send(products)
      }
      return res.send(products);
    });

}};
