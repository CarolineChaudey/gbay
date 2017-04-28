
module.exports = (api) => {
  const User = api.models.User;

  return function checkUserOrAdminRights(req, res, next) {

    // on vérifie aussi que l'utilisateur est bien propriétaire de ce compte
    if (req.user.userId !== req.params.id) {
      return res.status(401).send('not your account');
    }
    next();
  };
};
