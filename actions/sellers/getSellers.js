module.exports = (api) => {

  const User = api.models.User;

  return function create(req, res, next) {

    let querySettings = {};


    console.log('Debug : params  = ', req.query);

    querySettings.include = [];

    if (req.query.sellers) {
      querySettings.include.push({
        model: User,
        as: 'seller',
        where: {
          userId: {
            $in: req.query.sellers.split(',')
        }}
      });
    }


    if (req.query.limit) {
      querySettings.limit = req.query.limit;
    }
    if (req.query.page) {
      querySettings.offset = (req.query.page - 1) * req.query.limit; // (numero de page - 1) * elements par page = elements sautés
    }

    Seller.findAll(querySettings)
    .then(function(seller) {
      if (!sellers || sellers.length == 0) {
        return res.status(204).send(sellers)
      }
      return res.send(sellers);
    });

}};
