// 1.Визначення найбільшої цифри з числа.

function getMaxDigit(n){
    const maxDigit = +Math.max( ...(n + ``).split(``) );
      while (isNaN(n)) {
        alert(`Ви не ввели число`);
    }
      return maxDigit    
  }

  //2. Отримання першої великої букви,  а інших маленькими.
 

function getUserName(name){
    const userName = name.substr(0, 1).toUpperCase()+name.substr(1).toLowerCase()
    return userName 
}
 
//3.Визначення  прибутку з врахуванням відсотків.

function calсAmountAfterTax(n){
    while (isNaN(n)) {
        alert(`Ви не ввели число`);
    }
    const tax = 19.5;
    const amountAfterTax = +n - n*( tax/100 );
        return amountAfterTax;
      }

// 4.Чи є слово паліндромом

function isPalyndromWord(word){
    return word.split("").reverse().join("").toLowerCase() === word.toLowerCase() }

// 5.Рандомне число в діапазоні від N до M.

function getRandomNumber(N, M) {
    while ( isNaN(N) || isNaN(M) ){
      alert(`Не число`)
    }
    const maxNumber = Math.max(N, M);
    const minNumber = Math.min(N, M);
    return Math.floor( ( Math.random() * (maxNumber - minNumber + 1 ) ) + minNumber);
  }

// 6.Порахувати кількість разів коли зустрічається буква у слові

  function calcLetter(word, letter) {
    const numberOfLetter = word.split(letter).length - 1
    return numberOfLetter
    }

// 7.Генератор пароля заданої довжини

function getPasword(length = 8) {
  let result = '';
	let str = '0123456789';
  for ( let i = 0; i < length; i++ ) {
		result += str[getRandomNumber( 0, str.length - 1 )];
	}
	return result;
};

// 8.Конвертувати доллари($) в гривні(UAH) і навпаки (регістр не важливий).

function getExchangeMonye (monye){
  monye = monye.toLowerCase()
  const dollar = 27;
  let exhcangeSum = 0;
    const monyeNumber = monye.replace(/[$, uah]/gi, '');
  if (monye.indexOf('$') !== -1) {
    exhcangeSum = monyeNumber*dollar + ('UAH');
      } else if (monye.indexOf('UAH') !== -1){
    exhcangeSum = monyeNumber/dollar + ('$');
  } else if ((monye.indexOf('uah') == -1) || (monye.indexOf('$') == -1)){
      exhcangeSum = alert('Введіть валюту ($ або UAH)')
  }
    return exhcangeSum
}

// 9. Піднести до степеня  без використання Math.pow та **.
function exponentiationNumber(number, exponent) {
      let result = 1;
      for ( let i = 0; i < exponent; i++ ) {
      result *= number;
      }
      return result;
  } 

// 10. Видалення букви зі слова.

function deleteLetter(word, letter) {
  const  deleteLetter = word.split(letter).join('');
  return deleteLetter
}

// 11. Видалення букв що повторюються 1 і бліше разів.
function deleteDuplicateLetter(text) {
  text = text.toLowerCase();
  text = text.split('');
  let result = text.filter(function(event) {
  return text.indexOf(event) == text.lastIndexOf(event);
  });
  result = result.join('');
  return  result
}