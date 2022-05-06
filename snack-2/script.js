// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

let N = Number(prompt("Inserisci un numero"));

while (isNaN(N)) {
  N = Number(prompt("Inserisci un numerooooooooooooo!!!"));
}

for (let i = 0; i < N; i++) {

  let arr = [];

  for (let i = 0; i < 10; i++) {
    let N = Math.floor(Math.random() * 100);

    arr.push(N);
  } 

  console.log(arr);
}


