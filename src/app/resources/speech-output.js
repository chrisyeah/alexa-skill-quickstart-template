// de-DE
const deDE = { translation: {
    // new session
    WELCOME: [
        '<say-as interpret-as="interjection">willkommen</say-as>!',
        'Hallo!'
    ],
    WELCOME_REPROMPT: 'Was möchtest du tun?'
}};

// en (template)
const EN = { translation: {
    // new session
    WELCOME: [
        'Welcome!',
        'Hello!'
    ],
    WELCOME_REPROMPT: 'What do you want to do?'
}};

// en-GB
const enGB = Object.assign({}, EN);
enGB.translation.WELCOME.push('All right?');

// en-US
const enUS = Object.assign({}, EN);

module.exports = {
    'de-DE': deDE,
    'en-GB': enGB,
    'en-US': enUS
};