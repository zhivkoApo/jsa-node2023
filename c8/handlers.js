const studenti = [
    {
        id: 1,
        name: "Zhivko"
    },
    {
        id: 20,
        name: "Stole"
    }
];

const home = (req, res) => {
    res.send('THIS IS HOME');
}

const home_post = (req, res) => {
    // console.log(req.body);
    // res.send('Success');
    res.json(req.body);
}

const calculator_get = (req, res) => {
    let result;
    // if (req.query.a) {
    //     let a = req.query.a
    // } else {
    //     res.json({
    //         "msg": "First number is not provided"
    //     });
    // }

    // if (req.query.b) {
    //     let b = req.query.b
    // } else {
    //     res.json({
    //         "msg": "Second number is not provided"
    //     });
    // }
    switch (req.params.operation) {
        case 'sobiranje':
            result = Number(req.query.a) + Number(req.query.b);
            break;
        case 'odzemanje':
            result = Number(req.query.a) - Number(req.query.b);
            break;
        case 'mnozhenje':
            result = Number(req.query.a) * Number(req.query.b);
            break;
        case 'delenje':
            result = Number(req.query.a) / Number(req.query.b);
            break;
    }

    res.json({
        'msg': "Calculation done sucessfully",
        "result": result
    });
}

const calculator_post = (req, res) => {
    console.log(req.query);
    let result;
    switch (req.params.operation) {
        case 'sobiranje':
            result = Number(req.query.a) + Number(req.body.b);
            break;
        case 'odzemanje':
            result = Number(req.body.a) - Number(req.body.b);
            break;
        case 'mnozhenje':
            result = Number(req.body.a) * Number(req.body.b);
            break;
        case 'delenje':
            result = Number(req.body.a) / Number(req.body.b);
            break;
    }

    res.json({
        'msg': "Calculation done sucessfully",
        "result": result
    });
}

const smeni_ime = (req, res) => {
    let found = studenti.filter(() => req.body.id == studenti.id);
    if (found) {
        studenti.forEach(() => {
            studenti.id == req.body.id
            studenti.name = req.body.name
        });
    } else {
        res.json("No student found with that id");
    }
    console.log(req.body);
    res.json({
        "msg": "Endpoint hit sucessfully",
        "studenti": studenti
    });
}

module.exports = {
    home,
    home_post,
    calculator_get,
    calculator_post,
    smeni_ime
};