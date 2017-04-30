
module.exports = (api) => {
  const User = api.models.User;
  const Product = api.models.Product;
  const Category = api.models.Category;

  return function delProduct(req, res, next) {

    console.log(productFields);
    Product.destroy(productFields, {where: {
      productId: req.params.productId
    }})
    .then((deletedProduct) => {
      if (!deletedProduct) {
        return res.status(500).send('deletetion.failed');
      }
      return res.status(200).send('product.deletion.successful');
    });
  };
};
