const wordData = require('./vocabulary');

const translate = require('google-translate-api');

const words = [];
const wordDataCopy = wordData;

for (let i=0; i<10; i++) {
    const random = Math.floor(Math.random() * wordDataCopy.length);
    const randomWord = wordDataCopy[random];

    const index = wordDataCopy.indexOf(randomWord);
    wordDataCopy.splice(index, 1);

    words.push(randomWord);
}

console.log(words);

words.forEach((word) => {
    translate(word, {to: 'fr'}).then(res => {
        console.log(res.text);
        // console.log(res.from.language.iso);
    }).catch(err    => {
        console.error(err);
    });
})
