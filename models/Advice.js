const Schema = require('mongoose').Schema;
const timestamps = require('mongoose-timestamps');

module.exports = (api) => {
    const schema = new Schema({
      contenu: {
        type: String,
        required: true
      },
      auteurId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      concerneId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    });

    schema.plugin(timestamps);
    return api.mongoose.model('Advice', schema);
}
