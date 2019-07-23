const { fbNotificationModel } = require('../model/notification');
const { getUserByUserId } = require('./userModel');

const createNotification = async (notification) => {
    try {
        let result = await getUserByUserId(notification.user_id);
        notification.user_id = result._id;
        let result1 = await fbNotificationModel.create(notification);
        console.log("notification created");
    } catch (error) {
        console.log(error);
    }
};

const getNotificationByUserId = async (id) => {
    try {
        let result = await getUserByUserId(id);
        let id1 = result._id;
        let result1 = await fbNotificationModel.findOne({ user_id: id1 });
        console.log(result1);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createNotification, getNotificationByUserId };
