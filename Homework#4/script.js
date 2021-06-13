// 1.Визначення найбільшої цифри з числа.

document.querySelector("#func_1").onclick = function getMaxDigit(n){
  n = prompt("Введіть число")
  while (isNaN(n)) {
    n = prompt(`Ви не ввели число`);
  }
  const maxDigit = +Math.max( ...(n + ``).split(``) );
    return alert(`Найбільше число ${maxDigit}` )    
}
  //2. Отримання першої великої букви, а інших маленькими.

document.querySelector("#func_2").onclick = function getUserName(name){
  name = prompt(`Введіть ім'я (регістр не важиливий)`)
  const userName = name.substr(0, 1).toUpperCase()+name.substr(1).toLowerCase()
  return alert(`Ваше ім'я ${userName}` )
}

//3.Визначення  прибутку з врахуванням податку.

document.querySelector("#func_3").onclick = function calсAmountAfterTax(n){
  n = prompt('Вкажіть суму до вирахування податку')
  while (isNaN(n)) {
      n = prompt(`Ви не ввели число`);
  }
  const tax = 19.5;
  const amountAfterTax = +n - n*( tax/100 );
      return alert(`Сума після вирахування податку  ${amountAfterTax}`);
    }

// 4.Чи є слово паліндромом

document.querySelector("#func_4").onclick = function isPalyndromWord(word){
  word = prompt(`Введіть слово`)
  return  alert(word.split("").reverse().join("").toLowerCase() === word.toLowerCase())
}

// 5.Рандомне число в діапазоні від N до M.

document.querySelector("#func_5").onclick = function getRandomNumber(N, M) {
  N = prompt('Вкажіть перше число');
  while (isNaN(N)){
     prompt(`Введіть ціле число`)
    }
  M = prompt('Вкажіть друге число');
  while (isNaN(M)){
     prompt(`Введіть ціле число`)
    }
  const maxNumber = Math.max(N, M);
  const minNumber = Math.min(N, M);
  const randomNumber = Math.floor( ( Math.random() * (maxNumber - minNumber + 1 ) ) + minNumber)
  return alert(`Ваше випадкове число ${randomNumber}`);
}

// 6.Порахувати кількість разів коли зустрічається буква у слові

document.querySelector("#func_6").onclick = function calcLetter(word, letter) {
  word = prompt(`Введіть слово`)
  letter = prompt(`Введіть букву`)
  const numberOfLetter = word.split(letter).length - 1
  return alert(`Буква ${letter} зуічтрічається у слові ${numberOfLetter} рази`)
  }

  // 7.Генератор пароля заданої довжини

document.querySelector("#func_7").onclick = function getPasword(lengthPasword ) {
lengthPasword = prompt(`Назвіть довжину пароля`);
if(isNaN(lengthPasword) || lengthPasword < 1) {
lengthPasword = 8
  }
  let result = '';
  const listOfNumber = '0123456789';
     for ( let i = 0; i < lengthPasword; i++ ) {
          result += listOfNumber[Math.floor( ( Math.random() * (listOfNumber.length - 1  - 1 + 1 ) ) + 1)];}
    return alert(`Ваш пароль ${result}`);
};

// 8.Конвертувати доллари($) в гривні(UAH) і навпаки (регістр не важливий).

document.querySelector("#func_8").onclick = function getExchangeMonye(monye){
monye = (prompt(`Введіть суму і валюту`)).toLowerCase()
while((monye.indexOf('uah') !== -1) && (monye.indexOf('$')) !== -1 ){
  prompt(`Введіть валюту ($ або UAH`).toLowerCase()
}
const dollar = 27;
let exhcangeSum = 0;
const monyeNumber = monye.replace(/[$, uah]/gi, '');
 if (monye.indexOf('UAH') == -1){
  exhcangeSum = (monyeNumber/dollar).toFixed(2) + ('$');
} else if (monye.indexOf('$') !== -1) {
  exhcangeSum = (monyeNumber*dollar).toFixed(2) + ('UAH');
}
  return alert(`Ви отримаєте ${exhcangeSum}`);
}

// 9. Піднести до степеня  без використання Math.pow та **.

document.querySelector("#func_9").onclick = function exponentiationNumber(number, exponent) {
number = prompt(`Введіть число яке потрібно піднести до степеня`)
  while (isNaN(number)){
  prompt(`Це має бути число`)
  }
exponent = prompt(`Введіть степінь для числа`)
  while (isNaN(exponent)){
  prompt(`Це має бути число`)
  }
let result = 1;
for ( let i = 0; i < exponent; i++ ) {
result *= number;
}
return alert(`Ваше число ${result}`);
} 

// 10. Видалення букви зі слова.

document.querySelector("#func_10").onclick = function deleteLetter(word, letter) {
word = prompt(`Введіть ваше речення`)
letter = prompt(`Введіть букву що потрібно видалити`)
const  whithOutDeleteLetter = word.split(letter).join('');
return alert(`Речення без букви "${letter}" виглядатиме так "${whithOutDeleteLetter}"`)
}

// 11. Видалення букв що повторюються 1 і бліше разів.

document.querySelector("#func_11").onclick = function deleteDuplicateLetter(text) {
text = prompt(`Введіть речення`).toLowerCase();
text = text.split('');
let result = text.filter(function(event) {
return text.indexOf(event) == text.lastIndexOf(event);
});
result = result.join('');
return  alert(`Речення без букв що поторюються більше одного разу виглядатиме так: "${result}"`)
}