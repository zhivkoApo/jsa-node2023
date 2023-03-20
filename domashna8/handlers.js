const util = require('./util');

const DATA_SOURCE = 'studenti.json';

const get_students = async (req, res) => {
    const data = await util.fileRead(DATA_SOURCE);
    console.log(data);
    res.json(JSON.parse(data));
};

const post_students = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = null;

        data = dataRaw.length > 0 ? JSON.parse(dataRaw) : [];

        data.push(req.body);

        await util.fileWrite(DATA_SOURCE, JSON.stringify(data));

        res.send('Data has been saved in ' + DATA_SOURCE);
    } catch (err) {
        res.send(err);
    }
}

const delete_student = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        let found = data.find((el) => {
            return el.id === Number(req.params.id);
        });
        
        if (!found) {
            res.send('No student with id ' + req.params.id + ' exists');
        }

        data = data.filter((el) => {
            return el.id !== Number(req.params.id);
        });
        await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
        res.send(' Successfully deleted student with id: ' + req.params.id);
        // res.send('ok');
    } catch (err) {
        res.send(err);
    }
}

const update_student = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        let found = data.find((el) => {
            return el.id === Number(req.params.id);
        });
        
        if (!found) {
            res.send('No student with id ' + req.params.id + ' exists');
        }

        data = data.map((el) => {
            if (el.id === Number(req.params.id)) {
                if (!req.body.hasOwnProperty('ime') || !req.body.hasOwnProperty('prosek')) {
                    res.send('Student with id ' + req.params.id + ' has not been updated becuase of wrong data input');
                }
                
                el.ime = req.body.ime ? req.body.ime : el.ime;
                el.prosek = req.body.prosek ? req.body.prosek : el.prosek;
            }

            return el;
        });

        await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
        res.send(' Successfully updated student with id: ' + req.params.id);
    } catch (err) {
        res.send(err);
    }
}

module.exports = {
    get_students,
    post_students,
    delete_student,
    update_student
};