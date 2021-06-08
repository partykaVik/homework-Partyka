 let firstNumber = Number( prompt( `Please, write first number (number must be integer)` ) );


while ( Number.isNaN(firstNumber) || !( Number.isInteger(firstNumber ) ) || !firstNumber ) {

    firstNumber = Number( prompt('Please try again (not a integer number)') ); 
}

let secondNumber = Number( prompt( `Please, write second number (number must be integer`) );


while ( Number.isNaN( secondNumber ) || !( Number.isInteger( secondNumber ) ) || !secondNumber ) {

    secondNumber = Number( prompt('Please try again (not a integer number)')); 
}

const askEvenNumber = confirm(`Do you need to consider even numbers?`);
const minNumber = Math.min( firstNumber, secondNumber );
const maxNumber = Math.max( firstNumber, secondNumber );
let sumNumbers = 0;

for (let i = minNumber; i <= maxNumber; i ++ ) {
  if ( askEvenNumber && i % 2 == 0) { 
      continue;
  }
  sumNumbers +=i;  
}

document.querySelector( '.answer_list' ).innerHTML =(` 
    <li>First number = ${ firstNumber } </li>
    <li>Second number = ${ secondNumber } </li>
    <li>Sum of numbers = ${ sumNumbers } </li>
 `
 )
