
window.onload = () => {
  const apiHandler = new ApiHandler('https://pokeapi.co/api/v2');
  const button = document.querySelector('#get-pokemon-button');
  const container = document.querySelector('#pokemon-container');
  const input = document.querySelector('#pokemon-input');
  const errorMessage = document.querySelector('#error-message');

  button.addEventListener('click', () => {
    // apiHandler.getPokemon(input.value)
    // .then(response => {
    //   const { sprites, name } = response.data;
    //   container.innerHTML = '';
    //   container.innerHTML = `
    //     <p>${name}</p>
    //     <img src=${sprites.front_default} alt="" srcset="">
    //   `
    // })
    // .catch(error => {
    //   errorMessage.innerHTML = "Ha habido un error. Por favor introduce un número correcto"
    // })
    getPokemons(input.value);

  })

  const getPokemons = (value) => {
    container.innerHTML = '';
    for (let i = 1; i <= value; i++) {
      apiHandler.getPokemon(i)
      .then(response => {
        const { name, sprites, id } = response.data;
        container.innerHTML += `
          <p>${name}</p>
          <p>${id}</p>
          <img src=${sprites.front_default} alt="" srcset="">
        `
      })
    }
  }
}