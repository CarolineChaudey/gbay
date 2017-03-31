const Schema = require('mongoose').Schema;
const timestamps = require('mongoose-timestamps');

module.exports = (api) => {
    const schema = new Schema({
      titre: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      prix: {
        type: float,
        required: true // même pour les enchères faut bien un prix de départ
      },
      note: {
        type: integer,
        required: false
      },
      debutEnchere: {
        type: Date,
        required: false // si en achat direct
      },
      finEnchere: {
        type: Date,
        required: false
      },
      vendeurId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      acheteurId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },
      CategoriesId: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }]
    });

    schema.plugin(timestamps);
    return api.mongoose.model('Product', schema);
}
