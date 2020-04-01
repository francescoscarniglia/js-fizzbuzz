console.log('js ok');
// Scrivi un programma che stampi i numeri da 1 a 100, ma:
var numStamp = Math.floor(Math.random() *100) +1;
console.log(numStamp);
// per i multipli di 3 stampi “Fizz” al posto del numero
var fizz = (numStamp % 3);
var res = fizz.replace(fizz, 'Fizz');
console.log(res);



// per i multipli di 5 stampi Buzz.
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Hint: ricordate l’esistenza dell’operatore modulo: %
