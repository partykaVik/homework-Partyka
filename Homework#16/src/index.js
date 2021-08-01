const infiniteGenerator = createGeneration();

function* createGeneration() {
	for (let i = 1; i < Infinity; i++) {
		yield i;
	}
}
