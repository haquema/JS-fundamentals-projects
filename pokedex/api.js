const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
};

module.exports = fetchPokemon;
