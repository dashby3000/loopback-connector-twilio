var SID = 'YOUR_TWILIO_ACCOUNT_SID';
var TOKEN = 'YOUR_TWILIO_ACCOUNT_TOKEN';

var TO = 'TARGET_PHONE_NUMBER';
var FROM = 'YOUR_TWILIO_PHONE_NUMBER';

var SGAPIKEY = 'YOUR TWILIO SENDGRID API KEY';

var smsData = {
    type: 'sms',
    to: TO,
    from: FROM,
    body: 'Hello, from the LoopBack Twilio Connector!'
};

var callData = {
    type: 'call',
    to: TO,
    from: FROM,
    url: 'https://raw.githubusercontent.com/dashby3000/loopback-connector-twilio/master/example/call.xml'
};

const emailData = {
    type: 'email',
    to: TO,
    from: FROM,
    subject: 'Sending with SendGrid & LoopBack is Fun',
    text: 'and easy to do anywhere, even with LoopBack/Node.js',
    html: '<strong>and easy to do anywhere, even with LoopBack/Node.js</strong>',
};

var ds = require('loopback').createDataSource({connector: require('../'), accountSid: SID, authToken: TOKEN, sgAPIKey: SGAPIKEY});

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

Twilio.send(emailData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

