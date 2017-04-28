const Tokenify = require('sequelize-tokenify');
var jwt = require('jsonwebtoken');

module.exports = (api) => {
  const User = api.models.User;

  return function create(req, res, next) {
    let user = req.body.user;
    jwt.sign({ userId: req.body.user.userId },
              'shhhhh',
              {'expiresIn': 60},
              function(err, token) {
                if (err) {
                  return res.status(500).send('connection.failed');
                }
                User.update({userToken: token},
                            {where: {userId: req.body.user.userId}}
                ).then(function(result) {
                  if (result = [1]) {
                    return res.status(200).send({token: token});
                  }
                });
    });
  };
};
