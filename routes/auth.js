
const router = require('express').Router();

module.exports = (api) => {

  // créer un compte
  router.post('/register',
              api.middlewares.bodyParser.json(),
              api.middlewares.ensureUserFields,
              api.actions.auth.createUser);

  // se connecter (et obtenir un token)
  router.post('/login',
              api.middlewares.bodyParser.json(),
              api.middlewares.checkUserCredentials,
              api.actions.auth.loginUser);

  // éditer ses infos
  router.put('/:id',
             api.middlewares.bodyParser.json(),
             api.middlewares.checkUserToken,
             api.middlewares.checkUserRights,
             api.actions.auth.editUser);

  // créditer son compte
  router.post('/addCredits/:passedUserId',
              api.middlewares.bodyParser.json(),
              api.middlewares.checkUserToken,
              api.middlewares.checkUserOrAdminRights,
              api.actions.auth.creditAccount);

  // supprimer un compte (soit le sien, soit l'admin supprime un compte)
  router.delete('/:id');

  return router;
};
