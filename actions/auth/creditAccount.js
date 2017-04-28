
module.exports = (api) => {
    const User = api.models.User;

    return function create(req, res, next) {

      // a-t-on indiqué un nb de credits ?
      if (!req.body.credits) {
        return res.status(400).send('credits.missing');
      }

      let newCredits = req.user.nbCredits + req.body.credits;

      User.update({nbCredits: newCredits},
                  {where: {userId: req.user.userId}}
      ).then(function(result) {
        if (result[0] == 1) {
          return res.status(200).send('success');
        }
        return res.status(400).send('credits.update.failed');
      });
    };

};
