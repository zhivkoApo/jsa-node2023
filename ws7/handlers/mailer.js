
const sendWelcome = async (req, res) => {
    try {
        // prati mejl preku mail service
        mailer.send('WELCOME', req.body);
        res.send({ success: true, status: 'OK' });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const sendResetPassword = async (req, res) => {
    try {
        mailer.send('RESET_PASSWORD', req.body);
        res.send({ success: true, status: 'OK' });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    sendWelcome,
    sendResetPassword
};