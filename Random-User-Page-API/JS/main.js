const api = new APIManager();
const renderer = new Renderer();
const LS = new userInfoLocalStorage();

const loadUser = () => {
  api.apiUser();
  api.apiQuotes();
  api.apiPokemon();
  api.apiText();
};

const displayUser = () => {
  renderer.userRender(api.data.users);
  renderer.friendsRender(api.data.users);
  renderer.quoteRender(api.data.quote);
  renderer.pokemonImageRender(api.data.pokemon.img);
  renderer.properCasePokemonName(api.data.pokemon.name);
  renderer.textRender(api.data.text);
};

const saveUserToLocalStorage = () => {
  LS.saveUser({ ...api.data });
  renderer.dropdownRender(api.data.users);
};

const loadUserFromLocalStorage = () => {
  renderer.loadUser(LS.users);
};
