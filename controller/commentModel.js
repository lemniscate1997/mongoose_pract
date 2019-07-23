const { fbCommentModel } = require('../model/comment');
const { getUserByUserId } = require('./userModel');

const createComment = async(comment)=> {
    try {
        let result = await getUserByUserId(comment.user_id);
        comment.user_id = result._id;
        let result1 = await fbCommentModel.create(comment);
        console.log("comment created");
    } catch (error) {
        console.log(error);
    }
};

let updateComment = async(cid,uid,pid,comment)=>{
    try {
        let result = await getUserByUserId(uid);
        uid = result._id;
        result=await fbCommentModel.updateOne({_id:cid,user_id:uid,post_id:pid},comment);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

let deleteComment = async(pid)=>{
    try {
        let result = await fbCommentModel.deleteMany({post_id:pid});
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

module.exports={createComment, updateComment,deleteComment};