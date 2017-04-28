const sha1 = require('sha1');

module.exports = (api) => {
  const User = api.models.User;

  return function checkUserCredentials(req, res, next) {

    if (!req.body || !req.body.email || !req.body.password) {
      return res.status(400).send('missing.fields');
    }

    let queryParams = {
      where : {
        email: req.body.email,
        pswd: sha1(req.body.password)
      }
    };

    User.findOne(queryParams).then(function(user) {
      if (!user) {
        return res.status(400).send('incorrect.email.or.password');
      }
      req.body.user = user.dataValues;
      next();
    });
  };
};
