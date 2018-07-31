const words = require('./vocabulary');

const translate = require('google-translate-api');

words.forEach((word) => {
    translate(word, {to: 'fr'}).then(res => {
        console.log(res.text);
        // console.log(res.from.language.iso);
    }).catch(err => {
        console.error(err);
    });
})
