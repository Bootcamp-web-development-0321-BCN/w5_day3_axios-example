class ApiHandler {
  constructor(baseURL){
    this.baseURL = baseURL;
  }

  getPokemon(number){
    return axios.get(`${this.baseURL}/pokemon/${number}`);
  }
}