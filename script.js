/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


// generare numero random da 1 a 6 

let giocatore = Math.floor(Math.random()*6);
console.log('Giocatore', giocatore);

let computer = Math.floor(Math.random()*6);
console.log('Computer', computer);

if(computer >= giocatore){
    console.log('Vince il computer')

} else {
    console.log('Vince il giocatore')
}
