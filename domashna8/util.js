const fs = require('fs');

const fileRead = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
};

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

module.exports = {
    fileRead,
    fileWrite
};