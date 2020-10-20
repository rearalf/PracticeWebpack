import React, { Fragment, useState } from 'react';
import pokebola from './img/logo.png';

const pokemonBase = {
	name: '',
	sprites: {
		front_default: '',
		back_default: '',
		other: {
			'official-artwork': {
				front_default: '',
			},
		},
	},
};

export default function App(){
	const [ Pokemon, setPokemon ] = useState(pokemonBase);
	const [ InputPokemon, setInputPokemon ] = useState('');

	const handleChange = async () => {
		const loweCase = InputPokemon.toLowerCase();
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${loweCase}`);
		const poke = await res.json();
		!poke && console.log('object');
		setPokemon(poke);
	};

	/* 
rock
ghost
steel
ice */

	return (
		<Fragment>
			<h1>Busca tu pokemon Favorito</h1>
			<main className="Search">
				<input
					type="text"
					value={InputPokemon}
					onChange={e => setInputPokemon(e.target.value)}
					placeholder="Ejemplo Bulbasaur"
				/>
				<button disabled={InputPokemon ? false : true} onClick={handleChange}>
					Buscar Pokemon
				</button>
			</main>
			<div className="content">
				{Pokemon.name ? (
					<div className="pokeDex">
						<div className="contentImg">
							<img
								src={Pokemon.sprites.other['official-artwork'].front_default}
								alt={Pokemon.name}
							/>
						</div>
						<div className="pokeInfo">
							<div className="firstInfo">
								<article>
									<h2>{Pokemon.name}</h2>
									<h3>N. °{Pokemon.id}</h3>
								</article>
								<div className="types">
									<h4>Type: </h4>
									<ul>
										{Pokemon.types.map(type => (
											<li key={type.type.name} className={type.type.name}>
												{type.type.name}
											</li>
										))}
									</ul>
								</div>
								<div className="abilities">
									<h4>Habilidad: </h4>
									<ul>
										{Pokemon.abilities.map(abilitie => (
											<li key={abilitie.ability.name}>
												{abilitie.ability.name}
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="secondInfo">
								<div className="stats">
									<h4>Base points: </h4>
									<ul className="statsList">
										{Pokemon.stats.map(stat => (
											<div key={stat.stat.name} className="stat">
												<h5>{stat.stat.name}</h5>
												<div className="progress">
													<div
														className="progressBar"
														style={{
															width: stat.base_stat,
														}}
													/>
												</div>
											</div>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="logo">
						<img src={pokebola} alt="bola" />
					</div>
				)}
			</div>
		</Fragment>
	);
}
