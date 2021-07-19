const nextValueButton = document.getElementById('nextValue');
const increaseFontButton = document.getElementById('increaseFontSize');
const decreaseFontButton = document.getElementById('decreaseFontSize');
const increase = increaseFontGeneration();
const decrease = decreaseFontGeneration();

const infiniteGenerator = createGeneration();

function* createGeneration() {
	for (let i = 1; i < Infinity; i++) {
		yield i;
	}
}

let fontSize = 14;

function* increaseFontGeneration() {
	for (; fontSize < 48; fontSize = fontSize + 2) yield fontSize;
}

function* decreaseFontGeneration() {
	for (; fontSize > 2; fontSize = fontSize - 2) yield fontSize;
}

nextValueButton.addEventListener('click', () => {
	document.getElementById('newValue').innerHTML = `${
		infiniteGenerator.next().value
	}`;
});

decreaseFontButton.addEventListener('click', () => {
	document.getElementsByClassName('test-text')[0].style.fontSize = `${
		decrease.next().value
	}px`;
});

increaseFontButton.addEventListener('click', () => {
	document.getElementsByClassName('test-text')[0].style.fontSize = `${
		increase.next().value
	}px`;
});
