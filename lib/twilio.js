var assert = require('assert');

var twilio;

/**
 * Export the TwilioConnector class.
 */

module.exports = TwilioConnector;

/**
 * Create an instance of the connector with the given `settings`.
 */

function TwilioConnector(settings) {

    assert(typeof settings === 'object', 'cannot initialize TwilioConnector without a settings object');
    var connector = this;

    var accountSid = this.accountSid = settings.accountSid;
    var authToken = this.authToken = settings.authToken;

    twilio = connector.twilio = require('twilio')(accountSid, authToken);
}

TwilioConnector.initialize = function (dataSource, callback) {
    dataSource.connector = new TwilioConnector(dataSource.settings);
    callback();
}

TwilioConnector.prototype.DataAccessObject = Twillio;

function Twillio() {

}

/**
 * Send a Twillio message or call with the given `options`.
 */

Twillio.send = function (options, fn) {
    var dataSource = this.dataSource;
    var settings = dataSource && dataSource.settings;
    var connector = dataSource.connector;
    assert(connector, 'Cannot use this module without a connector!');

    switch (options.type) {
        case 'sms':
            connector.twilio.messages.create(options, function (err, message) {
                fn(err, message);
            });
            break;

        case 'call':
            connector.twilio.calls.create(options, function (err, message) {
                fn(err, message);
            });
            break

        default:
            console.log("i don't know what to do");
            break;
    }
}

/**
 * Initialize the connector for the given data source
 * @param {DataSource} dataSource The data source instance
 * @param {Function} [callback] The callback function
 */
exports.initialize = function initializeDataSource(dataSource, callback) {
    console.log("Hi");
};

/**
 * Send using `modelInstance.send()`.
 */

Twillio.prototype.send = function (fn) {
    this.constructor.send(this, fn);
}

/**
 * Access the twilio client object.
 */

TwilioConnector.client
TwilioConnector.prototype.client =
    Twillio.client =
        Twillio.prototype.client = twilio;
