document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    searchForm: document.getElementById('search'),
    pokemonImage: document.querySelector('#pokemon-image'),
    pokemonLabel: document.querySelector('#pokemon-label'),
  };

  function handleSearchFailure() {
    elements.pokemonImage.src = '/placeholder.png';
    elements.pokemonImage.alt = 'No results';
    elements.pokemonLabel.textContent = 'No Results';
  }

  elements.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let query = document.querySelector('.form-control').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {

        let imgSrc = pokemon.sprites.front_default;
        let pokemonName = pokemon.name;

        elements.pokemonImage.src = imgSrc;
        elements.pokemonImage.alt = pokemonName;
        elements.pokemonLabel.textContent = pokemonName;
      })
      .catch(handleSearchFailure);
  });
});
