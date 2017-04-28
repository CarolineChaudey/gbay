const sha1 = require('sha1');

module.exports = (api) => {
  const User = api.models.User;

  return function editUser(req, res, next) {
    if (!req.body) {
      return res.status(400).send('no.parameters');
    }
    let changedFields = {};

    if (req.body.password) {
      changedFields.pswd = sha1(req.body.password);
    }
    if (req.body.address) {
      changedFields.address = req.body.address;
    }

    User.update(changedFields,
                {where: {userId: req.user.userId}}
    ).then(function(result) {
      if (result[0] == 1) {
        return res.status(200).send('success');
      }
      return res.status(400).send('user.update.failed');
    });

  };
};
