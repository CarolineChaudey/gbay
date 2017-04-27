
module.exports = (api) => {
    return {
      getAvailableProducts: require('./getAvailableProducts')(api)
    };
};
