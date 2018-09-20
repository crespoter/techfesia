var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:iiits%402020@ds159812.mlab.com:59812/techfesia');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', function () {
    console.log("MongoDB Connected");
});

module.exports = {
    mongoose: mongoose
};