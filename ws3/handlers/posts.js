const posts = require('../pkg/posts');
const authors = require('../pkg/authors');

const getAll = async (req, res) => {
    try {
        let all_posts = await posts.getAll();
        res.status(200).send(all_posts);
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

const getMine = async (req, res) => {
    try {
        let my_posts = await posts.getUserPosts(req.auth.uid);
        res.status(200).send(my_posts);
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

const getAuthors = async (req, res) => {
    try {
        let author = await authors.getByUsername(req.params.username);
        let authors_posts = await posts.getUserPosts(author._id);
        res.status(200).send(authors_posts);
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

const create = async (req, res) => {
    try {
        console.log(req);
        res.send('ok');
        // let data = {
        //     ...req.body,
        //     author_id: req.auth.uid,
        //     published_on: new Date()
        // };
        // let created_post = await posts.create(data);
        // res.status(201).send(created_post);
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

const update = async (req, res) => {
    try {
        let new_data = {
            ...req.body,
            author_id: req.auth.uid,
            published_on: new Date()
        };
        let updated_post = await posts.update(req.params.id, req.auth.uid, new_data);
        res.status(204).send(updated_post);
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

const remove = async (req, res) => {
    try {
        await posts.remove(req.params.id, req.auth.uid);
        res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

module.exports = {
    getAll,
    getMine,
    getAuthors,
    create,
    update,
    remove
};