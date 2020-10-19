import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* import image from './img/imagen.png';
import searchPokemon from './search';
const id = prompt('Ingrese un id para buscar un pokemon');
const body = document.body;
const data = `
<div>
    <h1>Hello World</h1>
    <img src=${image} alt="Imagen"/>
</div>`;
body.innerHTML = data;
searchPokemon(id)
	.then(data => {
		render(data);
	})
	.catch(error => console.log(error));
const render = data => {
	const pokemonImg = document.createElement('img');
	pokemonImg.setAttribute('src', data.sprites.front_default);
	pokemonImg.classList.add('pokeImg');
	document.body.append(pokemonImg);
}; */
