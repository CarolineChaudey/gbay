const Tokenify = require('sequelize-tokenify');
var jwt = require('jsonwebtoken');

module.exports = (api) => {
  const User = api.models.User;

    return function create(req, res, next) {
      let user = req.body.user;
      console.log(req.body.user);
      var token = jwt.sign({ userId: req.body.user.userId },
                            'shhhhh',
                            {'expiresIn': 60},
                            function(err, token) {
                              if (err) {
                                  return res.status(500).send('connection.failed');
                                  //return reject(err);
                              }
                              //return resolve(token);
                              User.update({userToken: token},
                                          {where: {userId: req.body.user.userId}}
                              ).then(function(result) {
                                console.log(result);
                              });
                            });

      return res.status(201).send('connected');
    };
};
