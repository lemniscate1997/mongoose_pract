const { fbUserModel } = require('./../model/user');

const getUsers = async () => {
    try {
        let result = await fbUserModel.find({});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

const getUserByUserId = async (id) => {
    try {
        let result = await fbUserModel.findOne({ user_id: id });
        return result;
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (user) => {
    try {
        let result = await fbUserModel.create(user);
        console.log("user created");
    } catch (error) {
        console.log(error);
    }
};

const addFriend = async (userId, fuId) => {
    try {
        if(userId != fuId){
            let user = await getUserByUserId(userId);
            let friend = await getUserByUserId(fuId);
            console.log(user, friend);
            
            if(!user.friends.includes(friend._id)){
                user.friends.push(friend._id);
                let result = await fbUserModel.update({ _id: user._id }, {friends: user.friends});
                console.log("done");
                
            } else {
                console.log("already as a user");
            }
        } else {
            console.log("this request is not possible");
        }
    } catch (error) {
        console.log(error);

    }
}

module.exports = { createUser, getUsers, getUserByUserId, addFriend };