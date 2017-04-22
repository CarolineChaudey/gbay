
const sha1 = require('sha1');

module.exports = (api) => {
    const User = api.models.User;

    return function create(req, res, next) {

      // trouve ou créé l'objet
      User.findOrCreate({where: {email: req.body.email}, defaults: {pswd: sha1(req.body.password), address: req.body.address}})
      .spread(function(user, created) {
        if (!created) {
          return res.status(409).send('email.already.tekken');
        }
        return res.status(201).send('created');
      });
    }
};
