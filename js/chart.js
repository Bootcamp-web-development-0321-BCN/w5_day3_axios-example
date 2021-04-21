window.onload = () => {
  const apiHandler = new ApiHandler('https://pokeapi.co/api/v2');


  const getPokemons = (value) => {
    const promises = [];
    for(let i = 1; i<= value; i++){
      promises.push(apiHandler.getPokemon(i));
    }
    return promises;
  }

  const printChart = (labels, data) => {
    const ctx = document.querySelector('#myChart').getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Pokemon experience',
            backgroundColor: 'blue',
            data
          },
          {
            label: 'Pokemon experience 2',
            backgroundColor: 'green',
            data
          }
        ]
      }
    })
  }


  const promisesArray = getPokemons(30);
  Promise.all(promisesArray)
  .then(values => {
    const data = values.map(response => response.data.base_experience);
    const labels = values.map(response => response.data.name);
    console.log(data, labels);

    printChart(labels, data);
  })
  .catch(error => console.error(error))
}


