const config = require('../config');
const userTable = require('../models/user');
const msg91 = require('../utils/msg91');

   

const createUser = (req,res)=>{
    var details = {...req.body,timestamp:Math.floor(Date.now() / 1000)};
    userTable.createUser(details).then(function(user){
        msg91.sendMessage(user.mobile,"Welcome to Techfesia. We will keep you notified about the events you have registered for. Have fun");
        res.json({status : true}); 
    },function([error,errorMessage]){
        console.log(error);
        res.json({
            status : false,
            error : errorMessage
        });
    }); 
}

const sendMessage = (req,res)=>{
    var event = req.body.event;
    userTable.getMobilesByEvent(event).then(function(mobiles){
        var mobilesString = mobiles.join(',');
        msg91.sendMessage(mobilesString,req.body.message).then(()=>{
            res.json({
                status : true
            });
        });
    },function([error,errorMessage]){
        console.log(error);
        res.json({
            status : false,
            error : errorMessage
        });
    });
}

const findUser = (req,res)=>{
    var mobile = req.query.mobile;
    userTable.findUserByMobile(mobile).then(function(user){
        if(user == null){
            res.json({
                status : false, error : "MOBILE_UNKNOWN"
            });
        }
        else{
            res.json({status : true, user : user});
        }
    },function(error){
        console.log(error);
        res.json({
            status : false,
            error : "INTERNAL_ERROR"
        });
    });
}

const updateUser = (req,res)=>{
    userTable.updateUser(req.body).then(function(){
        res.json({
            status : true
        });
    },function(error){
        console.log(error);
        res.json({
            status :false,
            error : "INTERNAL_ERROR"
        });
    });
}

module.exports = {
    createUser : createUser,
    sendMessage : sendMessage,
    findUser : findUser,
    updateUser:updateUser
}