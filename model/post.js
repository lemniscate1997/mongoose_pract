const Schema = mongoose.Schema;

const post = new Schema({
    post_data: String,
    user_id:  { type: Schema.Types.ObjectId, ref: 'fbUserModel' },
    like: [{
        user_id_like: [
            { type: Schema.Types.ObjectId, ref: 'fbUserModel' }
        ]
    }]
});

const fbPostModel = mongoose.model("fbPostModel", post);

module.exports = { fbPostModel };