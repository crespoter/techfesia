var config = require("../config");
var http = require("http");
var https = require("https");


var SMSoptions = {
    "method": "GET",
    "hostname": "api.msg91.com",
    "port": null,
    "path": "/api/sendhttp.php?sender={%sender%}&route={%route%}&mobiles={%mobile%}&authkey={%auth_key%}&country={%country_code%}&message={%message%}",
    "headers": {}
};
SMSoptions.path = SMSoptions.path.replace("{%sender%}", config.msg91.sender);
SMSoptions.path = SMSoptions.path.replace("{%route%}", config.msg91.route);
SMSoptions.path = SMSoptions.path.replace("{%auth_key%}", config.msg91.auth_key);
SMSoptions.path = SMSoptions.path.replace("{%country_code%}", config.msg91.country_code);


var sendMessage = function (mobiles,message) {
    return new Promise(function (resolve, reject) {
        var options = Object.assign({}, SMSoptions);
        options.path = options.path.replace("{%mobile%}", mobiles);
        options.path = options.path.replace("{%message%}",message);
        options.path = encodeURI(options.path);
        var req = http.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body = Buffer.concat(chunks);
                resolve();
            });
        });
        req.on("error", reject);
        req.end();
    });
    
}

module.exports = {
    sendMessage: sendMessage
};
