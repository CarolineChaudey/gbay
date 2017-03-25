
const router = require('express').Router();

module.exports = (api) => {

  // liste des vendeurs
  router.get('/');

  // avoir la note moyenne d'un vendeur
  router.get('/:id/averageMark');

  return router;
};
