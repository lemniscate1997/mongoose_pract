const Schema = mongoose.Schema;

const user = new Schema({
    user_id: String,
    name: String,
    contact_no: { type: String, length: 10 },
    pwd: String,
    email: {
        type: String,
        validate: {
            validator: function (value) {
                return /[a-z0-9]*@gmail.com/.test(value);
            }
        }
    },
    friends: [
        { type: Schema.Types.ObjectId, ref: 'fbUserModel', unique: true}
    ]
});

const fbUserModel = mongoose.model("fbUserModel", user);

module.exports = { fbUserModel };