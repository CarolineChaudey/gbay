
const sha1 = require('sha1');

module.exports = (api) => {
    const User = api.models.User;
    const Role = api.models.Role;

    return function create(req, res, next) {
      // trouve ou créé l'objet, permet que chaque user ai un email unique
      User.findOrCreate({where: {email: req.body.email}, // si le email est déjà pris, pas de creation
                         include: [ {model: Role, as: 'role'} ], // permet de prendre en compte la relation avec Role
                         defaults: {pswd: sha1(req.body.password), // les autres attributs si il y a création
                                    address: req.body.address,
                                    roleTitle: 'user'}})
      .spread(function(user, created) {
        if (!created) {
          return res.status(409).send('email.already.tekken');
        }
        return res.status(201).send('created');
      });
    }
};
