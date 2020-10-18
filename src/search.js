async function searchPokemon(id){
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const poke = await res.json();
	return poke;
}

export default searchPokemon;
