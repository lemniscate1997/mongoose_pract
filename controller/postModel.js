const { fbPostModel } = require('../model/post');
const { getUserByUserId } = require('./userModel');
const { deleteComment } = require('./commentModel');
let createPost = async (post) => {

    try {
        let result = await getUserByUserId(post.user_id);
        console.log(result);
        post.user_id = result._id;
        let result1 = await fbPostModel.create(post);
        console.log("post created");
    } catch (error) {
        console.log(error);
    }

}

let getPosts = async () => {
    try {
        let result = await fbPostModel.find({});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const getPostWithCommentsByUser = async (pageNo, pageSize, uid) => {
    try {
        const offset = pageNo * pageSize;
        let user = await getUserByUserId(uid);
        let result = await fbPostModel.aggregate([
            {
                "$match": {
                    user_id: user._id
                }
            },
            {
                "$lookup": {
                    "from": "fbcommentmodels",
                    "localField": "_id",
                    "foreignField": "post_id",
                    "as": "comments"
                }
            }
        ]).skip(offset).limit(offset + pageSize);
        console.log(result);

        return result;

    } catch (error) {
        console.log(error);

    }
}

let updatePost = async (pid, uid, pdata) => {
    try {
        let result = await getUserByUserId(uid);
        let result1 = await fbPostModel.updateOne({ _id: pid, user_id: result._id }, pdata);
        console.log(result1);
    } catch (error) {
        console.log(error);
    }
}

let deletePost = async (pid, uid) => {
    try {
        let result = await getUserByUserId(uid);
        let result1 = await fbPostModel.findOne({ _id: pid, user_id: result._id });
        console.log(result, result1);

        if (!!result1) {
            deleteComment(pid);
            let result = await fbPostModel.deleteOne({ _id: pid });
            console.log(result);
        }
        else {
            console.log("You are not authenticated user!")
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports = { createPost, getPosts, updatePost, deletePost, getPostWithCommentsByUser };
