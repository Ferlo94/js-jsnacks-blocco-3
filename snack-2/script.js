// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.



let N = Number(prompt("Inserisci un numero"));

const arr1 = [];

while (isNaN(N)) {
  N = Number(prompt("Inserisci un numerooooooooooooo!!!"));
}


for (i = 0 ; i < N ; i++) {
    arr1.push(Math.floor(Math.random() * 100) + 1);


    while (arr1.length < 10) {
    arr1.push(Math.floor(Math.random() * 100) + 1);

    }

}





console.log(arr1);



