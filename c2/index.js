// Podatochni tipovi i pechatenje vo Javascript

console.log('zdravo svetu'); // Pechatenje na string 
console.log(5!=5); // Pechatenje na boolean (istovremeno i evaluiranje na logichka operacija -> ispechati go rezultatot od "5 ne e ednakvo na 5"
// shto znachi deka e nevistina (false) i kje se ispechati false)
console.log(25); // Pechatenje na integer (number)
console.log(25.5); // Pehatenje na float/double/decimal (number)
console.log(typeof 25); // Pechatenje na tipot na podatok
console.log(typeof 25.5); // Pechatenje na tipot na podatok

// inicijaliziranje na kompleksen podatochen tip - objekt (so svoi properties)
const chovek = {
    name: "John",
    surname: "Doe"
};

console.log(chovek); // Pechatenje na objektot
a = 10; // Inicijaliziranje na promenliva -> isto kako let a; da ste napishale
console.log(a); // Pechatenje na promenliva
a = 12; // Menuvanje na vrednosta na promenlivata
console.log(a);
const b = 15; // Inicijaliziranje na konstanta
console.log(b);
b = 30; // error -> ne mozhe da se menuva konstanta
console.log(b);

let niza = [1, true, 2.5, 'zdravo']; // Inicijaliziranje na kompleksen podatochen tip - niza
console.log(niza); // Pechatenje na nizata
// Nizite mozhe da sodrzhat razlichni podatochni tipovi kako primerot pogore
// number, boolean, string, array (mozhe niza vo niza), object (mozhe objekt vo niza) itn.

let student = {
    ime: "Pero",
    prezime: "Nakov",
    vozrast: 25
};

console.log(student);

student.prezime = "Perovski"; // pravilno menuvanje na vrednost na objekt.

// vakvoto menuvanje na vrednost na odreden property vo objektot pravi da se izgubat ostanatite properties.
// student = {
//     prezime: "Perovski"
// };

console.log(student);

// definiranje na funkcija so parametri
function testFn(a, b) {
    console.log('a: ', a);
    console.log('b: ', b);
    return 'Test fn initiated';
}

console.log(testFn(a, b)); // Povikuvanje na funkcijata (se izvrshuva se shto e vnatre) i pechatenje na rezultatot od funkcijata (return vrednost)
let test_fn = testFn(a, b); // zachuvuvanje na vrednosta vratena od funkcijata vo promenliva
console.log(test_fn); // pechatenje na taa promenliva

// definiranje na funkcija so arrow syntax
const testFn1 = () => {
    console.log('test fn 1 initiated. This is an arrow function');
}

testFn1(); // Povikuvanje na funkcijata

// definiranje na arrow funkcija so parametri od koi eden ima predefinirana (default-na) vrednost
const testFn2 = (b, a = 25) => {
    return a + b;
}

// povikuvanje na funkcijata i pechatenje na rezultatot
console.log(testFn2(50)); // shto kje pechati?
console.log(testFn2(50, 20)); // shto kje pechati?

// definiranje na arrow funkcija chij parametar e objekt po default
const testFn3 = (o = {}) => {
    o.ime = "Zhivko";
    console.log(o);
}

// vrednostite vo javascript objektite se prenesuvaat po referenca shto znachi deka
// dokolku vrednosta na prenesen objekt kako parametar vo funkcija, mu ja smenime vnatre 
// vo funkcijata, posle nejzinoto izvrshuvanje objektot kje ima promeneto property
// kako primerot so const s i testFn3(s);
const s = { ime: "Zlate", prezime: "Zlatevski" };
testFn3(s);
// console.log(o); // error, objektot o postoi samo vo scope-ot na funkcijata testFn3(o). Nadvoreshnosta ne znae za ovoj objekt.
console.log(s);

// Ushte eden primer prenesuvanje na vrednost po referenca
// vsushnost alociranata nova promenliva stanuva referenca na inicijalniot objekt
// i sekoja promena na edniot kje napravi promena vo drugiot objekt i obratno.
let uchenik = { ime: "Marko", ocena: 4 };
let uchenik2 = uchenik;

console.log(uchenik);
uchenik.ime = "Vlado";
console.log(uchenik);
console.log(uchenik2);

// koristenje na switch statement vo funkcija so parametri
// funkcija za konvertiranje na celsius stepeni vo farenheit i obratno.
// obrnete vnimanie na koristenjeto na return i break
// koga se koristi return, vednash se izleguva od funkcijata, 
// i se vrakja vrednosta shto ja vrakjate
// a break izleguva od scope-ot vo kojshto se naogja (vo sluchajov switch)
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

// convert funkcija direktno samo so return, bez break.
// definitivno pochisto i poefikasno napishana funkcija
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

// povikuvanje na funkcijata za konvertiranje na stepeni
let temp = 25;
console.log(convert('c2f', temp));
let res = convert('p2p', temp); // Cannot convert, the conversion type does not exist.
console.log(res);
// formuli za presmetka na celsius vo farenheit i obratno
// c2f vrednost * 9/5 + 32 
// f2c (vrednost - 32) * 5/9


// ZADACHA NA CHAS
// definirajte dva objekti na uchenici
// da imaat ime, prezime, ocenka
// dokolku prviot uchenik ima pogolema ocena od vtoriot
// pechatete "<ime na prv uchenik> <prezime na prv uchenik> e podobar od <ime na vtor uchenik> <prezime na vtor uchenik>"
// dokolku e obratno, ispechatete go obratnoto
// dokolku se isti, ispechatete, "<uchenik 1> ima isto znaenje kako i <uchenik 2>"


// RESHENIE NA ZADACHATA OD CHAS
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
