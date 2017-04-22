
module.exports = (req , res, next) => {
  console.log(req.body);
  if (!req.body || !req.body.email || !req.body.password || !req.body.address) {
    return res.status(400).send('missing.fields');
  }
  next();
};
