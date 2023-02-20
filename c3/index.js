// const { b, c, test_funkcija } = require('./text_convert.js');

// console.log(b);
// console.log(c);
// console.log(test_funkcija(b, c));
// const test_funkcija = require('./text_convert.js');

// console.log(test_funkcija(20, 15));

const { firstLetterUppercase, textStats, textConvert } = require('./text_convert.js');

text1 = "zdravo svetu ova e samo test.";
console.log(firstLetterUppercase(text1));

let primer_text = "Zdravo Zhivko. Kako si? Gledam deka te nema na predavanja. Si se zapushtil!";
console.log(textStats(primer_text));
console.log(textConvert('lat2cyr', primer_text));