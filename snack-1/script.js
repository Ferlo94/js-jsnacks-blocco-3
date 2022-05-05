const array = [];

const userNumber = Number(prompt("Inserisci un numero"));

let somma = 0;

while(somma < 50) {

    if (isNaN(userNumber)) {
        userNumber = Number(prompt("Inserisci un numero!!!!!!"));
    } else {

    const userNumber = Number(prompt("Inserisci un numero"));
    somma += userNumber;
    array.push(userNumber);

    console.log(array);
    }
}

console.log(somma)









