const strings = require('../pkg/strings');

const upload = async (req, res) => {
    try {
        let fileTypes = ['image/png', 'image/jpg', 'image/pjpeg', 'image/jpeg', 'image/gif'];
        let maxFileSize = 5 * 1024 * 1024;
        if (!fileTypes.includes(req.files.slika.mimetype)) {
            return res.status(400).send('Bad request');
        }

        if (maxFileSize < req.files.slika.size) {
            return res.status(400).send('Bad request');
        }

        let newFileName = `${strings.random(20)}_${req.files.slika.name}`;
        await req.files.slika.mv(`${__dirname}/../uploads/${newFileName}`); // ws5/uploads/432fhasdABV_slika1.jpg
        res.status(201).send({filename: newFileName});
        // res.status(200).send('OK');
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE!');
    }
};

const download = async (req, res) => {
    try {
        let filePath = `${__dirname}/../uploads/${req.params.file}`;
        res.download(filePath, req.params.file.split('_')[1]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE!');
    }
};

module.exports = {
    upload,
    download
};