import './css/hw-11.css';
import {
	generateBlocks,
	maxNumber,
	sumNumbers,
	getMaxDigit,
	getPairs,
	divideByThree,
	students,
	getSubjects,
	getUserName,
	ukraine,
	getMyTaxes,
	Student,
	stopAudio,
	playAudio,
	palyButton,
	audio,
	request,
	getInfoAboutPlanet,
	getRandomHieroglyph,
	createGeneration,
	infiniteGenerator,
} from './js/script';
//homework #9
setInterval(generateBlocks, 1000);
// homework #11

getRandomHieroglyph(5);

//homework #13

getInfoAboutPlanet(`https://swapi.dev/api/planets/?page=1`);

//homework #1
maxNumber();

//homework #2
sumNumbers(2, 25);

////homework #3
getMaxDigit(35257);

// homework #4
getPairs();

// homework #5
console.log(`divideByThree ('Commander') = ${divideByThree('Commander')}`);

//homework #6
console.log(
	`Список предметів для студента ${students[1].name} ${getSubjects(
		students[1]
	)}`
);

// homework #7
console.log(
	`Як IT-спеціаліст з 5000$ в Україні ви сплатите ${getMyTaxes.call(
		ukraine,
		5000
	)} $ податків`
);

// homework #8
const ostap = new Student(
	'Остап Бендер',
	'Вищої Школи Психотерапії м.Одеса',
	3,
	5,
	4,
	4,
	5
);
console.group(`Оцінки зараз`);
console.log(`Оцінки студента: ` + ostap.studentMarks);
console.log(`Середня оцінка студента = ` + ostap.averageMarks());
console.groupEnd();

// homework #10

palyButton(audio);

// homework #11

getRandomHieroglyph(5);

//homework #13

getInfoAboutPlanet(`https://swapi.dev/api/planets/?page=1`);

//homework #14
console.group(`Generators`);
infiniteGenerator.next().value;
infiniteGenerator.next().value;
infiniteGenerator.next().value;
console.groupEnd();
