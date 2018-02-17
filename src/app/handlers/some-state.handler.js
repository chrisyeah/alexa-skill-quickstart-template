const Alexa = require('alexa-sdk');
const states = require('./states.const');

module.exports = Alexa.CreateStateHandler(states.SOME_STATE, {

    'SomeIntent': function() {
        let speechOutput = '';

        this.handler.state = states.NONE;        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }

});