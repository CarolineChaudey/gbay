const Schema = require('mongoose').Schema;
const ttl = require('mongoose-ttl');
const timestamps = require('mongoose-timestamps');

module.exports = (api) => {
    const schema = new Schema({
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    });

    schema.plugin(ttl, {ttl: '1h'}); // une heure ça me semble bon non ?
    schema.plugin(timestamps);
    return api.mongoose.model('Token', schema);
}
