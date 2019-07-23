const Schema = mongoose.Schema;

const notification = new Schema({
    not_type: String,
    user_id: { type: Schema.Types.ObjectId, ref: 'fbUserModel' },
    not_status: String,
});

const fbNotificationModel = mongoose.model("fbNotificationModel",notification);
module.exports={fbNotificationModel};