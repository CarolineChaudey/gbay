
const router = require('express').Router();

module.exports = (api) => {

  // créer un compte
  router.post('/register');

  // se connecter (et obtenir un token)
  router.get('/login');

  // éditer ses infos
  router.put('/:id');

  // créditer son compte
  router.post('/addCredits/:nbCredits');

  // supprimer un compte (soit le sien, soit l'admin supprime un compte)
  router.delete('/:id');

  return router;
};
