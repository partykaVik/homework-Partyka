const characterInfo = document.getElementById('character-info');
const planetInfo = document.getElementById('planet-info');
const buttonGetInfoCharacter = document.getElementById(
	'getCharacterInformation'
);
const getFilm = document.querySelector('#film');
const buttonGetPlanetInformation = document.getElementById(
	'getPlanetInformation'
);
const nextPagePlanet = document.getElementById('nextPagePlanet');
const prevPagePlanet = document.getElementById('prevPagePlanet');

async function getInfoAboutFilmCharacter(url) {
	request(url)
		.then(data => {
			return data.characters;
		})
		.then(character => {
			characterInfo.innerHTML = '';
			planetInfo.innerHTML = '';
			return character.map(e => getCharacterInfo(e));
		});
}

async function getInfoAboutPlanet(url) {
	request(url)
		.then(data => {
			return data.results;
		})
		.then(results => {
			characterInfo.innerHTML = '';
			planetInfo.innerHTML = '';
			return results.map(e => getPlanetInfo(e));
		});
}

//`<div class="person"><img src="img/${info.name}.jpeg"/><p>Name person ${info.name}, birth year person ${info.birth_year} is ${info.gender} gender<p></div>`;

async function getCharacterInfo(url) {
	request(url).then(info => {
		return (characterInfo.innerHTML += `<div class="character-info"><p> ${info.name}</p><img src="img/${info.name}.jpg"/> 
			<p>Born ${info.birth_year}</p>
			<p>${info.gender} gender</p></div>`);
	});
}

async function getPlanetInfo(info) {
	return (planetInfo.innerHTML += `<li class="planet-info"><p> ${info.name}</p></li>`);
}

async function request(url) {
	return fetch(url)
		.then(response => response.json())
		.catch(console.log);
}

buttonGetInfoCharacter.addEventListener('click', () => {
	getInfoAboutFilmCharacter(`https://swapi.dev/api/films/${getFilm.value}/`);
});

buttonGetPlanetInformation.addEventListener('click', () => {
	getInfoAboutPlanet(`https://swapi.dev/api/planets/`);
});

let page = 1;
nextPagePlanet.addEventListener('click', e => {
	page = page + 1;
	if (page > 6) {
		page = 6;
	} else {
		nextPagePlanet.removeAttribute('disabled');
		getInfoAboutPlanet(`https://swapi.dev/api/planets/?page=${page}`);
	}
});

prevPagePlanet.addEventListener('click', () => {
	page = page - 1;
	if (page < 1) {
		page = 1;
	} else {
		prevPagePlanet.removeAttribute('disabled');
		getInfoAboutPlanet(`https://swapi.dev/api/planets/?page=${page}`);
	}
});
