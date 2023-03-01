// const path = require('path');

// // Get the base filename
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(__filename.split("\\")[__filename.split("\\").length - 1]);

// // Directory name
// console.log(path.dirname(__filename));
// console.log(__dirname);

// // File extension name
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).ext);

// // concatenate paths
// // ../c4/hello.html
// console.log(path.join(__dirname, 'test', 'hello.html'));

const fs = require('fs');
const path = require('path');

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

// fileWrite(path.join(__dirname, 'test', 'ocenki.txt'), '4, 5, 3, 2, 1, 5')
//     .then(() => { // then == success
//         console.log("SUCCESS!");
//         return fileWrite(path.join(__dirname, 'test', 'boi.txt'), 'crvena, zholta, zelena');
//     }).then(() => { // then == success
//         console.log("SUCCESS 2!!!");
//         return fileWrite(path.join(__dirname, 'test', 'boi2.txt'), 'plava, violetova, portokalova');
//     }).catch(err => {
//         console.log(err);
//     });

const fileRead = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
};

// fileRead(path.join(__dirname, 'test', 'boi2.txt'))
//     .then((data) => {
//         console.log("PROMISE RESOLVED")
//         console.log(data);
//     }).catch((err) => {
//         console.log("PROMISE REJECTED");
//         console.log(err);
//     });

// (async () => {
//     try {
//         let ocenki = await fileRead(path.join(__dirname, 'test', 'ocenki.txt'));
//         let boi = await fileRead(path.join(__dirname, 'test2', 'boi.txt'));
//         let boi2 = await fileRead(path.join(__dirname, 'test', 'boi2.txt'));
//         console.log("ocenki: ", ocenki);
//         console.log("boi: ", boi);
//         console.log("boi2: ", boi2);
//     } catch (err) {
//         console.log(err);
//     }
// })();

// console.log('random tekst');

let imenik = [
    {ime: 'Zlate Zlatevski', telefon: 555666},
    {ime: 'Pero Perovski', telefon: 534646},
    {ime: 'Marko Markovski', telefon: 524626},
];

(async () => {
    try {
        let imenikData = JSON.stringify(imenik); // convert object to string      
        console.log(imenikData);
        await fileWrite(path.join(__dirname, 'test1', 'imenik.txt'), imenikData);
        let dataString = await fileRead(path.join(__dirname, 'test1', 'imenik.txt'));
        let data = JSON.parse(dataString); // convert string to object
        console.log(data);
    } catch(err) {
        console.log(err);
    }
})();