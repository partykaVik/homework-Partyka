const getRandomColor = () => {
	return '#' + Math.random().toString(16).slice(9);
};
const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
//homework #1
export function generateBlocks(row = 5, columns = 5) {
	canvas.width = row * 50;
	canvas.height = columns * 50;
	for (let i = 0; i <= canvas.width; i = i + 50) {
		for (let j = 0; j <= canvas.height; j = j + 50) {
			ctx.fillRect(i, j, 50, 50);
			ctx.fillStyle = getRandomColor();
		}
	}
}
//homework #1
export const maxNumber = () => {
	const headphone = 15.678;
	const smartphone = 123.965;
	const smartWatch = 90.2345;
	return console.log(
		`Найбільше число ${Math.max(headphone, smartphone, smartWatch)}`
	);
};

//homework #2
export function sumNumbers(minNumber, maxNumber) {
	let sumNumbers = 0;
	for (let i = minNumber; i <= maxNumber; i++) {
		if (i % 2 == 0) {
			continue;
		}
		sumNumbers += i;
	}
	return console.log(
		`Сума всіх непарних чисел в діапазоні від ${minNumber} до ${maxNumber} складає ${sumNumbers}`
	);
}

//homework #3
export function getMaxDigit(number) {
	const maxDigit = Math.max(...(number + ``).split(``));
	return console.log(`Найбільша цифра з числа ${number} є ${maxDigit}`);
}

// homework #4

export function getPairs() {
	const students = [
		'Олександр',
		'Ігор',
		'Олена',
		'Іра',
		'Олексій',
		'Світлана',
	];
	const girl = [];
	const boy = [];
	let pairs = [];
	for (let i = 0; i < students.length; i++)
		if (students[i].split('').slice(-1).pop() === 'а') {
			girl.push(students[i]);
		} else {
			boy.push(students[i]);
		}
	for (let i = 0; i < girl.length; i++) {
		pairs.push([girl[i], boy[i]]);
	}
	return console.log(pairs);
}

//homework #5

export function divideByThree(str) {
	str = str.replace(/\s/g, '').toLowerCase();
	return str.match(/.{1,3}/g);
}

console.log(`divideByThree ('Commander') = ${divideByThree('Commander')}`);

// homework #6

export const students = [
	{
		name: 'Tanya',
		course: 3,
		subjects: {
			math: [4, 4, 3, 4],
			algorithms: [3, 3, 3, 4, 4, 4],
			data_science: [5, 5, 3, 4],
		},
	},
	{
		name: 'Viktor',
		course: 4,
		subjects: {
			physics: [5, 5, 5, 3],
			economics: [2, 3, 3, 3, 3, 5],
			geometry: [5, 5, 2, 3, 5],
		},
	},
	{
		name: 'Anton',
		course: 2,
		subjects: {
			statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
			english: [5, 3],
			cosmology: [5, 5, 5, 5],
		},
	},
];

export const getSubjects = student => {
	return Object.keys(student.subjects).map(subject =>
		getUserName(subject).replaceAll('_', ' ')
	);
};
export function getUserName(name) {
	return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
}

//homework #7

export const ukraine = {
	tax: 0.195,
	middleSalary: 1789,
	vacancies: 11476,
};

export function getMyTaxes(salary) {
	return salary * this.tax;
}
console.log(
	`Як IT-спеціаліст з 5000$ в Україні ви сплатите ${getMyTaxes.call(
		ukraine,
		5000
	)} $ податків`
);

//homework #8

export class Student {
	constructor(fullName, university, course, ...marks) {
		(this.fullName = fullName),
			(this.university = university),
			(this.course = course),
			(this.marks = marks);
		this.dismiss = false;
	}

	recover() {
		this.dismiss = false;
	}

	expelled() {
		this.dismiss = true;
	}

	get studentMarks() {
		if (this.dismiss) return null;
		return this.marks;
	}

	set studentMarks(mark) {
		if (this.dismiss) return null;
		return this.marks.push(mark);
	}

	studentInfo() {
		return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`;
	}

	averageMarks() {
		if (this.dismiss) return null;
		return this.marks.reduce((prev, item) => prev + item) / this.marks.length;
	}
}

//homework 10
export let audio = document.querySelector(`.audio`);
export function stopAudio(audio) {
	audio.pause();
	audio.currentTime = 0;
}

export function playAudio(audio) {
	if (audio === null) return;
	audio.play();
}
export const palyButton = document.addEventListener('keypress', e => {
	stopAudio(audio);
	audio = document.querySelector(`audio#${e.code}`);
	playAudio(audio);
});

//homework #11

export async function getRandomHieroglyph(length) {
	let hieroglyphString = '';
	let i = 0;
	while (i < length) {
		const generateHieroglyph = new Promise(resolve => {
			setTimeout(() => {
				const dateToString = Date.now().toString().slice(-5);
				hieroglyphString = String.fromCharCode(dateToString);
				resolve(hieroglyphString);
			}, 50);
		});
		hieroglyphString += await generateHieroglyph;
		i++;
	}
	return console.log(hieroglyphString);
}

//homework #13
export async function request(url) {
	return fetch(url)
		.then(response => response.json())
		.catch(console.log);
}
export async function getInfoAboutPlanet(url) {
	request(url)
		.then(data => {
			return data.results;
		})
		.then(results => {
			return results.map(e => console.log(e));
		});
}

// homework #14
export const infiniteGenerator = createGeneration();

export function* createGeneration() {
	for (let i = 1; i < Infinity; i++) {
		yield i;
	}
}
