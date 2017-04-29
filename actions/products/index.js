
module.exports = (api) => {
    return {
      getAvailableProducts: require('./getAvailableProducts')(api),
      addProduct: require('./addProduct')(api)
    };
};
