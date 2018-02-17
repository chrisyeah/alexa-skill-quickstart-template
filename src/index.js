// index.js
const Config = require('./config/skill.config');
const Alexa = require('alexa-sdk');

const speechOutputResources = require('./app/resources/speech-output');
const newSessionHandler = require('./app/handlers/new-session.handler');
const someStateHandler = require('./app/handlers/some-state.handler');


exports.handler = function(event, context, callback) {
	const alexa = Alexa.handler(event, context);
	alexa.appId = Config.skillAppID;
	alexa.resources = speechOutputResources;

	alexa.registerHandlers(
		newSessionHandler,
		someStateHandler
	);
	alexa.execute();
};
