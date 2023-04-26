const fs = require('fs');
const Mailgun = require('mailgun.js');
const formData = require('form-data');
const validator = require('./validate');

const send = async (template, data) => {
    if (!validator[template]) {
        throw 'Validation schema does not exist for the given template.';
    }

    validator.validate(data, validator[template]);
    let templatePath = `${__dirname}/../../emailtemplates/${template}.html`;
    if (!fs.existsSync(templatePath)) {
        throw 'Template does not exist!';
    }

    let tmpl = fs.readFileSync(templatePath, 'utf8');
    let html = parseTemplate(tmpl, data);
    
    // NE MOZHEVME DA KREIRAME MAILGUN ACC NA CHAS A ZAVRSHI CHASOT
    // KJE VI ISPRATAM NA SLACK DOPOLNITELNO OBJASNUVANJE ZAEDNO SO KODOT
    // ISKOMENTIRAN PODOLU.
    // POSLE TOA, KJE GO OTKOMENTIRAM KODOT I KJE MOZHETE DA GO TESTIRATE DOMA OTKAKO
    // KJE KREIRATE MAILGUN ACCOUNT

    // const mailgun = new Mailgun(formData);
    // const mg_user = mailgun.client({
    //     username: process.env.MAILGUN_USERNAME,
    //     key: process.env.MAILGUN_API_KEY
    // });

    // let out = await mg_user.messages.create(mail_domain, {
    //     from: data.from,
    //     to: data.to,
    //     subject: data.subject,
    //     html: html
    // });

    console.log(out);
};

const parseTemplate = (template, data) => {
    for (let d in data) {
        let regex = new RegExp(`\{\{${d}\}\}`, 'g');
        template = template.replace(regex, data[d])
    }

    return template;
};

