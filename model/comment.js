const Schema = mongoose.Schema;


const comment = new Schema({
    comm_data: String,
    user_id: { type: Schema.Types.ObjectId, ref: 'fbUserModel' },
    post_id: { type: Schema.Types.ObjectId, ref: 'fbPostModel' },
});

const fbCommentModel=mongoose.model("fbCommentModel",comment);
module.exports={fbCommentModel};