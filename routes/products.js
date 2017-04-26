
const router = require('express').Router();

module.exports = (api) => {

  // prévoir les paramètres :category, seller, priceOrder, et pagesOf
  router.get('/available',
              api.middlewares.bodyParser.json(),
              api.actions.products.getAvailableProducts);

  // ajouter un produit
  router.post('/');

  // éditer un produit
  router.put('/:productId');

  // suprimer un produit
  router.delete('/:productId');

  // noter un produit
  router.post('/:productId/:mark');

  // historique des produits vendus
  router.get('/history');

  // historique des produits vendus d'un vendeur
  // si il y a moyen, mettre le sellerId en paramètre optionnel de la route ci-dessus
  router.get('/history/:sellerId');

  // enchérir sur un produit (bid = encherire en anglais)
  router.post('/:productId/bid/:nbCredits');

  // acheter directement un produit
  router.post('/:productId/buy');

  return router;
};
