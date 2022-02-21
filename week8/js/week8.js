/*function collatz(n, sequence=[n]) {
  if (n === 1){
      return `Sequence took ${sequence.length} steps. It was ${sequence}`;
  }

  if (n%2 === 0) {
      n = n/2;
  } else { 
      n = 3*n + 1;
  }

  return collatz(n,[...sequence,n]);
}

console.log(collatz(18));*/



/*const dice = {
  sides: 6,
      roll() {
          return Math.floor(this.sides * Math.random()) + 1;
      }
  }
  
  console.log('Before the roll');
  
  const roll = new Promise( (resolve,reject) => {
      const n = dice.roll();
      if(n > 1){
          setTimeout(()=>{resolve(n)},n*200);
      } else {
          setTimeout(()=>reject(n),n*200);
      }
  });
  
  roll.then(result => console.log(`I rolled a ${result}`) )
  .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
  
  console.log('After the roll');*/



/*function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}
const test = greeter("Hola Mundo");
test();*/


function outer() {
  const outside = 'Outside!';
  function inner() {
      const inside = 'Inside!';
      console.log(outside);
      console.log(inside);
  }
  console.log(outside);
  inner();
}

outer();