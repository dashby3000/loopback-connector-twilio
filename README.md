## loopback-connector-twilio

[Twilio](http://www.twilio.com/) connector for [LoopBack](http://www.loopback.io)

## Customizing Twilio configuration for examples

By default, examples from this module assumes the user has a [Twillio](http://www.twilio.com) account.  To run the example you will need to provide your `accountSid` and `authToken`.

The connector support the following aspects of the [Twilio REST API](http://www.twilio.com/docs/api/rest):
  - [Making Calls](http://www.twilio.com/docs/api/rest/making-calls)
  - [Sending Messages](http://www.twilio.com/docs/api/rest/sending-messages)

### Installation

In your LoopBack project:
    
    $ npm install --save loopback-connector-twilio

## Using the Connector
To use the connector, define the datasource using the connector in your `datasources.json` file:
    
    "twilio": {
        "name": "twilio",
        "connector": "loopback-connector-twilio",
        "accountSid": "YOUR_TWILIO_ACCOUNT_SID",
        "authToken": "YOUR_TWILIO_AUTH_TOKEN"
    }
  
Next, attach the created datasource to a model in the `model-config.json` file:

    "Twilio": {
        "dataSource": "twilio",
        "public": true
    }
    
Now, using the created model, you can send an SMS or make a call using the `send` method of the model:
    
    Twilio.send(options, callback);
    
**Note**: `options` is defined by the JSON objects in the next two sections:

### Sending a SMS
    {
        type: 'sms',
        to: 'YOUR_TWILIO_PHONE_NUMBER',
        from: 'TARGET_PHONE_NUMBER',
        body: 'TEXT_MESSAGE'
    }

### Making a Call
    {
        type: 'call',
        to: 'YOUR_TWILIO_PHONE_NUMBER',
        from: 'TARGET_PHONE_NUMBER',
        url: 'URL_TO_TwiMIL_FILE'
    }
    
## Running the Example
To run the example in the `/example/example.js` directory, you must set the following values in the file:

    var SID = 'YOUR_TWILIO_ACCOUNT_SID';
    var TOKEN = 'YOUR_TWILIO_ACCOUNT_TOKEN';
    var TO = 'YOUR_TWILIO_TELEPHONE_NUMBER';
    var FROM = 'TARGET_PHONE_NUMBER';

Next, from the from the `/loopback-connector-twilio/` directory, install the `loopback` module using the following command:
    
    $ npm install loopback
    
Finally, run the example app using the following command from the `/loopback-connector-twilio/` directory:

    $ node ./example/example.js
    
**NOTE**: The `url` property points to an XML file that specifies a [TwiMIL](http://www.twilio.com/docs/api/twiml) command.

### Version
0.5.0

License
----

MIT