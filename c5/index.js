const fs = require('fs');

const fileRead = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
};

(async() => {
    try {
        let dataString = await fileRead('studenti.json');
        let studenti = JSON.parse(dataString);

        console.log(studenti);

        let prosek = [...studenti.sort((a, b) => {
            if (a.prosek > b.prosek) {
                return -1;
            } else if(a.prosek < b.prosek) {
                return 1;
            }

            return 0;
        })];

        let sortIme = [...studenti.sort((a, b) => {
            if (a.ime.charAt(0) > b.ime.charAt(0)) {
                return 1;
            } else if (a.ime.charAt(0) < b.ime.charAt(0)) {
                return -1;
            }

            return 0;
        })];

        console.log(prosek);
        console.log(sortIme);

        let najnizokProsek = prosek[prosek.length - 1];
        let najvisokProsek = prosek[0];

        // iteracija 1 , accum = 0 + current.prosek 8.9
        // iteracija 2 accum = 8.9 + 9.5 ...
        let vkupenProsek = studenti.reduce((prev, cur) => {
            return cur.prosek + prev;
        }, 0);

        let sredenProsek = vkupenProsek / studenti.length;
        console.log(sredenProsek);

        let citiesWithTotalAverage = {}; // {"Los Angeles": 8.2, "New York": 5.7}

        for (let s of studenti) {
            if (!citiesWithTotalAverage[s.grad]) {
                citiesWithTotalAverage[s.grad] = s.prosek;
            }

            citiesWithTotalAverage[s.grad] = (citiesWithTotalAverage[s.grad] + s.prosek) / 2;
        }

        console.log(citiesWithTotalAverage);

        let citiesArray = [];

        for (let c in citiesWithTotalAverage) {
            citiesArray.push({
                grad: c,
                prosek: citiesWithTotalAverage[c]
            });
        }

        console.log(citiesArray);

        // DOMASHNA: Najdete go sredniot prosek od site proseci po gradovi
        // RESHENIE spored primerot:
        // New York => 8.03
        // Los Angeles => 8.2
        // Orlando => 9.1
        // Boston => 10
        // San Francisco => 6.8
        // Ispechatete go objektot od gradovi so soodvetnite proseci.
    } catch(err) {
        console.log(err);
    }
})();