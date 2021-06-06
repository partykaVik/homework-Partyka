 let firstNumber = Number( prompt ( `Please, write first number (number must be integer)` ) );


while ( Number.isNaN(firstNumber) || !( Number.isInteger(firstNumber ) ) || !firstNumber ) {

    firstNumber = Number( prompt ('Please try again (not a integer number)') ); 
}

let secondNumber = Number( prompt ( `Please, write second number (number must be integer`) );


while ( Number.isNaN( secondNumber ) || !( Number.isInteger( secondNumber ) ) || !secondNumber ) {

    secondNumber = Number( prompt ('Please try again (not a integer number)') ); 
}

const askEvenNumber = confirm(`Do you need to consider even numbers?`);
let minNumber = Math.min( firstNumber, secondNumber );
let maxNumber = Math.max( firstNumber, secondNumber );
let sumNumbers = 0;

for ( minNumber; minNumber <= maxNumber; minNumber ++ ) {
  if ( askEvenNumber && minNumber % 2 == 0) { 
      continue;
  }
  sumNumbers += minNumber;  
}

document.querySelector( '.answer_list' ).innerHTML =(` 
    <li>First number = ${ firstNumber } </li>
    <li>Second number = ${ secondNumber } </li>
    <li>Sum of numbers = ${ sumNumbers } </li>
 `
 )
