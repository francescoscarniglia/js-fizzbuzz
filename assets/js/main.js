console.log('js ok');
// Scrivi un programma che stampi i numeri da 1 a 100, ma:


// per i multipli di 3 stampi “Fizz” al posto del numero

for(var i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else  if(i % 3 == 0) {
     console.log('Fizzi');
   } else if(i % 5 == 0) {
     console.log('Buzz');
   } else {
     console.log(i);
   }
}

// per i multipli di 5 stampi Buzz.
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Hint: ricordate l’esistenza dell’operatore modulo: %
