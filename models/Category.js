const Schema = require('mongoose').Schema;
const timestamps = require('mongoose-timestamps');

module.exports = (api) => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      productsId: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }]
    });

    schema.plugin(timestamps);
    return api.mongoose.model('Category', schema);
}
