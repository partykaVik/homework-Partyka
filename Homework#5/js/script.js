// Перевірка на  число
function checkNumber(number) {
    return Number.isNaN(number)
}

// Фільтрування не цілих чисел
function checkInteger(array) { 
    const integerNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            integerNumbers.push(array[i]);
        }
    }
    return integerNumbers;
}

// 1. Масив з випадкових чисел в заданої велечини і діапазону. 

function getRandomArray(size, min, max) {
    checkNumber(size, min, max)
    let randomArray = [size];
    for(let i=0; i<size; i++)
     randomArray[i]= Math.floor(Math.random()*(max-min)+min);
    return randomArray;
   };
   //console.log(getRandomArray(10, 1, 100))

   // Визначення середнього значення всіх чисел масиву
function getAverage(...number) {
    return number.reduce((prev, item) =>  (prev+ item)) / number.length
 }
 console.log(getAverage(1,2,3))