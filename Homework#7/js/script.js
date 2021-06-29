const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};
const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921
};
const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114
};


//1. 
function getMyTaxes(salary) { 
  return salary*this.tax 
  } 
  console.log(`Як IT-спеціаліст з 5000$ в Україні ви сплатите ${getMyTaxes.call(ukraine, 5000)} $ податків`);
   
  //2. 
  function getMiddleTaxes(country){ 
    return this.middleSalary*this.tax 
  } 
   
  console.log(`У середньому IT-спеціалісти в Україні сплачують ${getMiddleTaxes.call(ukraine)}$ податків`) 
   
  //3. 
  function getTotalTaxes(country){ 
    return this.middleSalary*this.tax*this.vacancies 
  } 
   
  console.log(`Загалом IT-спеціалісти в Україні сплачують ${getTotalTaxes.call(ukraine)}$ податків`)

//4
function getMySalary(country) {
  const salary = getRandomNumber(1500, 2000);
  const taxes = salary*this.tax;
  const profit = salary - taxes;
  const infoItInCountry = {
    salary,
    taxes,
    profit,
  }
    return infoItInCountry
}
 
const timerId = setInterval(() => {
  console.log( getMySalary.call(ukraine) );
}, 10000);

setTimeout(() => {
  clearInterval(timerId);
}, 30000);
 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}