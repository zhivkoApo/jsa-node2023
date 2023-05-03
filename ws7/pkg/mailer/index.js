const fs = require('fs');
const Mailgun = require('mailgun.js');
const formData = require('form-data');
const validator = require('./validate');

const send = async (template, data) => {
    if (!validator[template]) {
        throw 'Validation schema does not exist for the given template.';
    }

    validator.validate(data, validator[template]);
    let templatePath = `${__dirname}/../../email_templates/${template}.html`;
    if (!fs.existsSync(templatePath)) {
        throw 'Template does not exist!';
    }

    let tmpl = fs.readFileSync(templatePath, 'utf8');
    let html = parseTemplate(tmpl, data);
    
    const mailgun = new Mailgun(formData);
    const mg_user = mailgun.client({
        username: process.env.MAILGUN_USERNAME,
        key: process.env.MAILGUN_API_KEY
    });

    let out = await mg_user.messages.create(process.env.MAILGUN_DOMAIN, {
        from: data.from,
        to: data.to,
        subject: data.subject,
        html: html
    });

    console.log(out);
};

const parseTemplate = (template, data) => {
    for (let d in data) {
        let regex = new RegExp(`\{\{${d}\}\}`, 'g');
        template = template.replace(regex, data[d]);
    }

    return template;
};

module.exports = {
    send
};
