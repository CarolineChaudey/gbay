
module.exports = (api) => {
  const User = api.models.User;
  const Product = api.models.Product;
  const Category = api.models.Category;

  return function addProduct(req, res, next) {
    let productFields = {
      title : req.body.title,
      description: req.body.description,
      price: req.body.price,
      sellerUserId: req.user.userId
    };

    if (req.body.biddingStart && (null == req.body.biddingEnd)) {
      return res.status(400).send('bidding.end.missing');
    }
    if (req.body.biddingStart && req.body.biddingEnd) {
      productFields.biddingStart = req.body.biddingStart;
      productFields.biddingEnd = req.body.biddingEnd;
    }
    if (req.body.categories) {
      let categoriesList = [];
      for(let i=0; i < req.body.categories.length; i++) {
        categoriesList.push(
          {title: req.body.categories[i]}
        );
      }
      productFields.categories = categoriesList;
    }

    console.log(productFields);
    Product.create(productFields, {include: {
      model: Category,
      as: 'categories'
    }})
    .then((createdProduct) => {
      return res.status(201).send(createdProduct);
    });
  };
};
