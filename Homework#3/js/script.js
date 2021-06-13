// 1.Визначення найбільшої цифри з числа.

document.querySelector("#func_1").onclick = function getMaxDigit(){
  let number = prompt("Введіть число")
  while (isNaN(number)) {
    number = prompt(`Ви не ввели число`);
  }
  const maxDigit = Math.max( ...(number + ``).split(``) );
    return alert(`Найбільше число ${maxDigit}` )    
}
  //2. Отримання першої великої букви, а інших маленькими.

document.querySelector("#func_2").onclick = function getUserName(){
  const nameFromUser = prompt(`Введіть ім'я (регістр не важиливий)`)
  const userName = nameFromUser.substr(0, 1).toUpperCase()+nameFromUser.substr(1).toLowerCase()
  return alert(`Ваше ім'я ${userName}` )
}

//3.Визначення  прибутку з врахуванням податку.

document.querySelector("#func_3").onclick = function calсAmountAfterTax(){
  let n = prompt('Вкажіть суму до вирахування податку')
  while (isNaN(n)) {
      n = prompt(`Ви не ввели число`);
  }
  const tax = 19.5;
  const amountAfterTax = +n - n*( tax/100 );
      return alert(`Сума після вирахування податку  ${amountAfterTax}`);
    }

// 4.Чи є слово паліндромом

document.querySelector("#func_4").onclick = function isPalyndromWord(){
  const wordToCheck = prompt(`Введіть слово`)
  return  alert(wordToCheck.split("").reverse().join("").toLowerCase() === wordToCheck.toLowerCase())
}

// 5.Рандомне число в діапазоні від N до M.

document.querySelector("#func_5").onclick = function getRandomNumber() {
  let firstNumber = prompt('Вкажіть перше число');
  while (isNaN(firstNumber)){
     prompt(`Введіть ціле число`)
    }
  let secondNumber = prompt('Вкажіть друге число');
  while (isNaN(secondNumber)){
     prompt(`Введіть ціле число`)
    }
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);
  const randomNumber = Math.floor( ( Math.random() * (maxNumber - minNumber + 1 ) ) + minNumber)
  return alert(`Ваше випадкове число ${randomNumber}`);
}

// 6.Порахувати кількість разів коли зустрічається буква у слові

document.querySelector("#func_6").onclick = function calcLetter() {
  const wordToCheck = prompt(`Введіть слово`).toLowerCase()
  const letterToCheck = prompt(`Введіть букву`).toLowerCase()
  const numberOfLetter = wordToCheck.split(letterToCheck).length - 1
  return alert(`Буква "${letterToCheck}" зуістрічається у слові ${numberOfLetter} рази`)
  }

  // 7.Генератор пароля заданої довжини

document.querySelector("#func_7").onclick = function getPasword(){
  let lengthPasword = prompt(`Назвіть довжину пароля`);
  if (lengthPasword === ''){
    lengthPasword = 8
  }
  while (isNaN(lengthPasword) || lengthPasword < 1) {
  lengthPasword = prompt(`Ви ввели не відповідні дані`)
    }
      let result = '';
        for ( let i = 0; i < lengthPasword; i++ ) {
        result += (Math.floor( ( Math.random() * ((lengthPasword - 1)  ) ) + 1));}
   return alert(`Ваш пароль "${result}"`);
  };
// 8.Конвертувати доллари($) в гривні(UAH) і навпаки (регістр не важливий).

document.querySelector("#func_8").onclick = function getExchangeMonye(){
let amount = prompt(`Введіть суму і валюту`).toLowerCase()
while((amount.indexOf('uah') === -1) && (amount.indexOf('$')) === -1 ){
  prompt(`Введіть валюту ($ або UAH`).toLowerCase()
}
const dollar = 27;
let exhcangeSum = 0;
const monyeNumber = amount.replace(/[$, uah]/gi, '');
 if (amount.indexOf('$') === -1){
  exhcangeSum = (monyeNumber/dollar).toFixed(2) + ('$');
} else if (amount.indexOf('uah') === -1) {
  exhcangeSum = (monyeNumber*dollar).toFixed(2) + ('UAH');
}
  return alert(`Ви отримаєте ${exhcangeSum}`);
}

// 9. Піднести до степеня  без використання Math.pow та **.

document.querySelector("#func_9").onclick = function exponentiationNumber() {
let numberToPower = prompt(`Введіть число яке потрібно піднести до степеня`)
  while (isNaN(numberToPower)){
  prompt(`Це має бути число`)
  }
let power = prompt(`Введіть степінь для числа`)
  while (isNaN(power)){
  prompt(`Це має бути число`)
  }
let result = 1;
if (power > 0){
  for ( let i = 0; i < power; i++ ) {
    result *= numberToPower;
    }
}
 else {
  power = power*(-1)
    for ( let i = 0; i < power; i++ ) {
      result *= numberToPower
      }
      result = 1/result
 }

  
return alert(`Ваше число ${result}`);
} 

// 10. Видалення букви зі слова.

document.querySelector("#func_10").onclick = function deleteLetter() {
const sentence = prompt(`Введіть ваше речення`).toLowerCase();
const letterToDelete = prompt(`Введіть букву що потрібно видалити`).toLowerCase();
const whithOutDeleteLetter = sentence.split(letterToDelete).join('');
return alert(`Речення без букви "${letterToDelete}" виглядатиме так "${whithOutDeleteLetter}"`)
}

// 11. Видалення букв що повторюються 1 і бліше разів.

document.querySelector("#func_11").onclick = function deleteDuplicateLetter() {
let word = prompt(`Введіть речення`).toLowerCase();
word = word.split('');
let result = word.filter(function(event) {
return word.indexOf(event) == word.lastIndexOf(event);
});
result = result.join('');
return  alert(`Речення без букв що поторюються більше одного разу виглядатиме так: "${result}"`)
}

