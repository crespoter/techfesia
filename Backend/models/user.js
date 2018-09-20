var dbController = require('./dbController');
var mongoose = dbController.mongoose;
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    _id : {type : Schema.Types.ObjectId, auto : true},
    name : {type : String},
    email : {type : String},
    mobile : {type : String},
    institute : {type : String},
    timestamp : {type : String},
    topbot : {type : Boolean},
    quadrotorWorkshop : {type : Boolean},
    appathon : {type : Boolean},
    medTechHackathon : {type : Boolean},
    elektra : {type : Boolean},
    reverseCoding : {type : Boolean},
    rcCarRacing : {type : Boolean},
    captureTheFlag : {type : Boolean},
    theCascader : {type : Boolean},
    pravikarsha : {type : Boolean},
    hackTheCode : {type : Boolean}
});

var User = mongoose.model('User', userSchema);
var createUser = function (details) {
    return new Promise((resolve,reject)=>{
        User.findOne({email : details.email},function(error,user){
            console.log(user);
            if(user != null){
                reject(["Email already registered","EMAIL_EXISTS"]);
            }else{
                User.findOne({mobile : details.mobile},function(error,user){
                    if(user !=null){
                        reject(["Mobile is already registerd","MOBILE_EXISTS"]);
                    }
                    else{
                        var newUser = new User(details);
                        newUser.save(function (err, newObject) {
                            if (err) {
                                console.log(err,"INTERNAL_ERROR");
                                reject([err,"INTERNAL_ERROR"]);
                            }
                            else {
                                console.log(newObject.name + " Saved");
                                resolve(newUser);
                            }
                        });

                    }
                })
            }
        })
        
    });
}

var updateUser = function(details){
    return User.update({mobile : details.mobile},details);
}
var getMobilesByEvent = function(event){
    return new Promise(function(resolve,reject){
        var query = {};
        query[event] = true;
        User.find(query,function(error,users){
            if(error){
                reject([error,"INTERNAL_ERROR"]);
            }else{
                var mobileList = users.map(user=>{
                    return user.mobile
                });
                resolve(mobileList);
            }
        })
    });
}

var findUserByMobile = function(mobile){
    return User.findOne({mobile : mobile});
}

module.exports = {
    User : User,
    createUser : createUser,
    getMobilesByEvent:getMobilesByEvent,
    findUserByMobile:findUserByMobile,
    updateUser:updateUser
}