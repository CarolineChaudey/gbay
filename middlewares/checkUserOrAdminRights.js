
module.exports = (api) => {
  const User = api.models.User;

  return function checkUserOrAdminRights(req, res, next) {

    // l'admin fait ce qu'il veut, on vérifie aussi que l'utilisateur est bien propriétaire de ce compte
    if ( (req.user.roleTitle !== 'admin') && (req.user.userId !== req.params.passedUserId)) {
      return res.status(401).send('not admin nor your account');
    }
    next();
  };
};
