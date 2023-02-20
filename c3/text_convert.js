// const b = 25;
// const c = 76;

// const test_funkcija = (a, b) => {
//     return a+b;
// }

// module.exports = {
//     b,
//     c,
//     test_funkcija
// };

// module.exports = test_funkcija;

const firstLetterUppercase = (text) => {
    // let prvaBukva = text.charAt(0);
    // let zgolemenaPrvaBukva = prvaBukva.toUpperCase();
    // let ostatok = text.slice(1, text.length);
    // returnText = zgolemenaPrvaBukva + ostatok;
    // return returnText;

    return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};

const textStats = (text) => {
    if (typeof text !== 'string') return;

    let output = {
        bukvi: 0,
        zborovi: 0,
        rechenici: 0,
        povekeOd5: 0,
        pomalkuOd5: 0,
        ednakvoNa5: 0
    };

    output.bukvi = text.length;
    output.zborovi = text.split(' ').length;
    output.rechenici = text.split('.').length

    let zborovi = text.split(' ');
    for (let zbor of zborovi) {
        if (zbor.length === 5) output.ednakvoNa5++;
        if (zbor.length > 5) output.povekeOd5++;
        if (zbor.length < 5) output.pomalkuOd5++;
    }

    // for (let i = 0; i < zborovi.length; i++) {
    //     if (zbor[i].length === 5) output.ednakvoNa5++;
    //     if (zbor[i].length > 5) output.povekeOd5++;
    //     if (zbor[i].length < 5) output.pomalkuOd5++;
    // }
    return output;




    // let rechenici = text.split('.');
    // let brojRechenici = 0;
    // let otstranetiRechenici = 0;
    // for (let i = 0; i < rechenici.length; i++) {
    //     if (rechenici[i].split("!").length > 0) {
    //         brojRechenici = brojRechenici + rechenici[i].split("!").length;
    //         otstranetiRechenici++;
    //     }

    //     if (rechenici[i].split("?").length > 0) {
    //         brojRechenici = brojRechenici + rechenici[i].split("?").length;
    //         otstranetiRechenici++;
    //     }
    // }
    // output.rechenici = brojRechenici + rechenici - otstranetiRechenici;
};

const textConvert = (type, text) => {
    const conversionMap = { sh: 'ш', dz: 'џ', zh: 'ж', a: 'а', b: 'б', c: 'ц', d: 'д', e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', j: 'ј' };

    for (let character in conversionMap) {
        let regex;
        switch(type) {
            case 'cyr2lat':
                regex = new RegExp(`${conversionMap[character]}`, 'g');
                text = text.replace(regex, character);
                break;
            case 'lat2cyr':
                regex = new RegExp(`${character}`, 'g');
                text = text.replace(regex, conversionMap[character]);
                // TO DO
                break;
            default:
                console.log('Wrong type of conversion');
                return null;
        }
    }

    return text;
}

module.exports = {
    firstLetterUppercase,
    textStats,
    textConvert
};

// DOMASHNA
// Optimizirajte ja textConvert() funkcijata za da raboti i za golemi bukvi