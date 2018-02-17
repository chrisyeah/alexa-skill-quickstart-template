const states = require('./states.const');

const inNewSessionStartableIntents = [
    'SomeIntent'
];

module.exports = {
    'NewSession': function() {
        if (this.event.request.type === 'IntentRequest') {
            const intentName = this.event.request.intent.name;
            if (inNewSessionStartableIntents.indexOf(intentName) > -1) {
                return this.emit(intentName);
            }
        }
        // else: Launch Request
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        let reprompt = this.t('WELCOME_REPROMPT');
        let speechOutput = randomPhrase(this.t('WELCOME'));

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },

    // Custom Intents

    'SomeIntent': function() {
        this.handler.state = states.SOME_STATE;
        this.emitWithState('SomeIntent');
    },

    // Unhandled Intent

    'Unhandled': function () {
        const reprompt = '';
        const speechOutput = '';
        
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    
    // Built-In Intents

    'AMAZON.HelpIntent': function () {
        const reprompt = '';
        const speechOutput = '';
        
		this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    
    'AMAZON.NoIntent': function () {
		const speechOutput = '';
        this.response.speak(speechOutput);
        this.emit(':responseReady');
	},

    'AMAZON.StopIntent': function () {
		const speechOutput = '';
        this.response.speak(speechOutput);
        this.emit(':responseReady');
	},

	'AMAZON.CancelIntent': function () {
		const speechOutput = '';
        this.response.speak(speechOutput);
        this.emit(':responseReady');
	}

};

function randomPhrase(array) {
    if (array && array.length) {
        let i = 0;
        i = Math.floor(Math.random() * array.length);
        
        return(array[i]);
    } else {
        return array;
    }
}