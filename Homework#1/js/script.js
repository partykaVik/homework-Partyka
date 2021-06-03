const headphone = 15.678;
const smartphone = 123.965;
const smartWatch = 90.2345;


const maxNumber = Math.max(headphone, smartphone, smartWatch);
console.log(maxNumber);

const minNumber = Math.min(headphone, smartphone, smartWatch);
console.log(minNumber);

const sumNumber = (headphone + smartphone + smartWatch);
console.log(sumNumber);

const integerSum = (Math.floor(headphone)+Math.floor(smartphone)+Math.floor(smartWatch));
console.log(integerSum);

const hundredsSum = ((Math.round(integerSum/100))*100);
console.log(hundredsSum);

const boolenValue = (integerSum % 2 == 0);
console.log(boolenValue);

const differenceSum = (500-sumNumber);
console.log(differenceSum);

const averageValueToHundredth = ((Math.round((sumNumber/3)*100))/100);
console.log(averageValueToHundredth);

const discount = (Math.round(Math.random()*100));
const profit = ((sumNumber/2)-((discount/100)*sumNumber))
console.log(profit);

document.querySelector('.devices_price').innerHTML = (
    `
    <li>Найбільшеціна: ${maxNumber}</li>
    <li>Найменше ціна: ${minNumber}</li>
    <li>Вартість всіх товарів: ${sumNumber}</li>
    <li>Сума без копійок з округлення в меншу сторону: ${integerSum }</li>
    <li>Сума товарів округлена до сотень: ${hundredsSum}</li>
    <li>Парність: ${minNumber}</li>
    <li>Сума решти: ${minNumber}</li>
    <li>Середнє значення: ${averageValueToHundredth}</li>
    <li>Знижка: ${discount}%</li>
    <li>Прибуток: ${profit}</li>
     `
)


