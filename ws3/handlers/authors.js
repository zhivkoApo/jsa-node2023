const authors = require('../pkg/authors');

const getAll = async (req, res) => {
    try {
        let all_authors = await authors.getAll();
        res.status(200).send(all_authors);
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

module.exports = {
    getAll
};