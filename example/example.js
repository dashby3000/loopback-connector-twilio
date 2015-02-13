var SID = 'YOUR_TWILIO_ACCOUNT_SID';
var TOKEN = 'YOUR_TWILIO_ACCOUNT_TOKEN';

var TO = 'YOUR_TWILIO_PHONE_NUMBER';
var FROM = 'TARGET_PHONE_NUMBER';

var smsData = {
    type: 'sms',
    to: TO,
    from: FROM,
    body: 'Hello, from the StrongLoop Twilio Connector!'
}

var callData = {
    type: 'call',
    to: TO,
    from: FROM,
    url: 'https://raw.githubusercontent.com/dashby3000/loopback-connector-twilio/master/example/call.xml'
}

var ds = require('loopback').createDataSource({connector: require('../'), accountSid: SID, authToken: TOKEN});

var Twilio = ds.createModel('twilio', {
    type: {type: String, id: true, required: true},
    to: {type: String, required: true},
    from: {type: String, required: true},
    body: {type: String, required: true},
    url: {type: String, required: true}
});

Twilio.send(smsData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

Twilio.send(callData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

