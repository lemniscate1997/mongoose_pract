global.mongoose = require('mongoose');
const { connection } = require('./config/connection');

const connect = connection();

const { createUser, getUsers, getUserByUserId, addFriend } = require('./controller/userModel');
const { createPost, getPosts, updatePost, deletePost, getPostWithCommentsByUser } = require('./controller/postModel');
const { createComment, updateComment } = require('./controller/commentModel');
const { createNotification, getNotificationByUserId } = require('./controller/notificationModel');

// createUser({
//     user_id:"3",
//     name:"Hardik3",
//     contact_no:"1534567890",
//     pwd:"xyzas",
//     email:"aqe@gmail.com",
//     friend: []
// });


// getUsers();

// getUserByUserId('1');

// createPost({
//        post_data : "Hello Users",
//        user_id  : '1',
// })

// getPosts();

// createComment({
//     comm_data:"good one!!",
//     user_id:"3",
//     post_id:"5d2728336387090f6dcdae68"
// });

// createNotification({
// not_type:"cover picture updated",
// user_id:"1",
// not_status:"seen"

// });

// getNotificationByUserId("1");

// let x={post_data:"profile photo1 updated"};
// updatePost("5d26fcb696b88a6cc93c3ee1","1",x);

// let comment={comm_data:"good!!!"};
// updateComment("5d2701aef429f870069fd6ec","2","5d26fcb696b88a6cc93c3ee1",comment);

// deletePost("5d2726905a5b450d085adb15","1");

// getPostWithCommentsByUser(0, 5, '1');

// addFriend('1', '1');