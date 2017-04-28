
module.exports = (api) => {
    return {
      createUser: require('./createUser')(api),
      loginUser: require('./loginUser')(api),
      creditAccount: require('./creditAccount')(api),
      editUser: require('./editUser')(api)
    };
};
