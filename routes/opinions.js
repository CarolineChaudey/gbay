
const router = require('express').Router();

module.exports = (api) => {

  // poster avis sur un vendeur
  router.post('/:id');

  // supprimer un avis
  router.delete('/:id');

  // éditer un avis
  router.put('/:id');

  return router;
};
