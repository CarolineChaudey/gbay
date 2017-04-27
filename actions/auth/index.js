
module.exports = (api) => {
    return {
      createUser: require('./createUser')(api)
    };
};
