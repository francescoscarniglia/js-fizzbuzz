console.log('js ok');
// Scrivi un programma che stampi i numeri da 1 a 100, ma:

var numStamp = Math.floor(Math.random() *100) +1;
// console.log(numStamp);

// per i multipli di 3 stampi “Fizz” al posto del numero

for(var i = 0; i < 100; i++) {
    if(numStamp % 3) {
      console.log('Fizzi');
    } else if(numStamp % 5) {
      console.log('Buzz');
    } else {
      console.log('FizzBuzz');
    }
}

// per i multipli di 5 stampi Buzz.
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Hint: ricordate l’esistenza dell’operatore modulo: %
