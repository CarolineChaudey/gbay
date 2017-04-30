
module.exports = (api) => {
  const User = api.models.User;

  return function editUser(req, res, next) {

    User.destroy({
      where: {
        userId: req.user.userId
    }})
    .then((result) => {
      if (result == 1) {
        return res.status(200).send('account.deletion.succeded');
      }
      return res.status(500).send('account.deletion.failed');
    });

  };
};
