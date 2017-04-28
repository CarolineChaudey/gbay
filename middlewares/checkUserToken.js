const jwt = require('jsonwebtoken');

module.exports = (api) => {
  const User = api.models.User;

  return function checkUserToken(req, res, next) {
    // est-ce qu'il y a bien le token dans le header ?
    let authorization = req.headers['authorization'];
    if (!authorization) {
      return res.status(401).send('unauthorized: token required');
    }

    let queryParams = {
      where : {
        userToken: authorization
      }
    };

    jwt.verify(authorization,
               api.settings.salt,
               (err, decryptedToken) => { // est-ce qu'il est valide ?
                 if (err) {
                   return res.status(400).send(err);
                 }
                 let user = User.findOne(queryParams) // qui est son user ?
                 .then((user) => {
                   if (!user) {
                     return res.status(400).send(err);
                   }
                   req.user = user.dataValues;
                   //console.log(req.user);
                   next();
                 });
    });

  };
};
