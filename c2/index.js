// console.log('zdravo svetu');
// console.log(5!=5);
// console.log(typeof 25);
// console.log(typeof 25.5);

// const chovek = {
//     name: "John",
//     surname: "Doe"
// };

// console.log(chovek);
// a = 10;
// console.log(a);
a = 12;
// console.log(a);
const b = 15;
// console.log(b);
// b = 30;
// console.log(b);

// let niza = [1, true, 2.5, 'zdravo'];
// console.log(niza);

// let student = {
//     ime: "Pero",
//     prezime: "Nakov",
//     vozrast: 25
// };

// console.log(student);

// // student.prezime = "Perovski";

// student = {
//     prezime: "Perovski"
// };

// console.log(student);

function testFn(a, b) {
    console.log('a: ', a);
    console.log('b: ', b);
    return 'Test fn initiated';
}

console.log(testFn(a, b));
let test_fn = testFn(a, b);
console.log(test_fn);

const testFn1 = () => {
    console.log('test fn 1 initiated. This is an arrow function');
}

testFn1();

// const testFn2 = (b, a = 25) => {
//     return a + b;
// }

// console.log(testFn2(50, 20));

const testFn3 = (o = {}) => {
    o.ime = "Zhivko";
    console.log(o);
}

const s = { ime: "Zlate", prezime: "Zlatevski" };
testFn3(s);
// console.log(o);
console.log(s);

let uchenik = { ime: "Marko", ocena: 4 };
let uchenik2 = uchenik;

console.log(uchenik);
uchenik.ime = "Vlado";
console.log(uchenik);
console.log(uchenik2);

// const convert = (type, value) => {
//     let returnValue = null;
//     switch (type) {
//         case 'c2f':
//             returnValue = value * 9/5 + 32;
//             break;
//         case 'f2c':
//             returnValue = (value - 32) * 5/9;
//             break;
//         default:
//             console.log('Cannot convert. The conversion type does not exist.');
//             break;
//     }

//     return returnValue;
// }

const convert = (type, value) => {
    switch (type) {
        case 'c2f':
            return value * 9/5 + 32;
        case 'f2c':
            return (value - 32) * 5/9;
        default:
            console.log('Cannot convert. The conversion type does not exist.');
            return;
    }
}

let temp = 25;
console.log(convert('c2f', temp));
let res = convert('p2p', temp);
console.log(res);
// c2f vrednost * 9/5 + 32 
// f2c (vrednost - 32) * 5/9

// definirajte dva objekti na uchenici
// da imaat ime, prezime, ocenka
// dokolku prviot uchenik ima pogolema ocena od vtoriot
// pechatete "<ime na prv uchenik> <prezime na prv uchenik> e podobar od <ime na vtor uchenik> <prezime na vtor uchenik>"
// dokolku e obratno, ispechatete go obratnoto
// dokolku se isti, ispechatete, "<uchenik 1> ima isto znaenje kako i <uchenik 2>"

const prvUchenik = { ime: "Stefan", prezime: "Petreski", ocenka: 5 };
const vtorUchenik = { ime: "Filip", prezime: "Stefanoski", ocenka: 4 };
if (prvUchenik.ocenka > vtorUchenik.ocenka) {
    console.log(`${prvUchenik.ime} ${prvUchenik.prezime} e podobar od ${vtorUchenik.ime} ${vtorUchenik.prezime}`);
} else if (prvUchenik.ocenka < vtorUchenik.ocenka) {
    console.log(`${vtorUchenik.ime} ${vtorUchenik.prezime} e podobar od ${prvUchenik.ime} ${prvUchenik.prezime}`);
} else {
    console.log(`${vtorUchenik.ime} ${vtorUchenik.prezime} ima isto znaenje kako i ${prvUchenik.ime} ${prvUchenik.prezime}`);
}

prvUchenik.ocenka > vtorUchenik.ocenka ?
    console.log('asd') : prvUchenik.ocenka < vtorUchenik.ocenka ?
        console.log('asd1') : console.log('asd2');
