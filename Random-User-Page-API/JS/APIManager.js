//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  apiUser() {
    $.ajax({
      url: "https://randomuser.me/api/?results=7",
      dataType: "json",
      success: (user) => (this.data.users = user.results),
      error: "Uh oh, something has gone wrong.",
    });
  }

  apiQuotes() {
    $.ajax({
      url: "https://api.kanye.rest",
      dataType: "json",
      success: (q) => (this.data.quote = q.quote),
      error: "Uh oh, something has gone wrong.",
    });
  }

  apiPokemon() {
    let randomNum = Math.floor((Math.random() + 1) * 20);
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${randomNum}`,
      dataType: "json",
      success: (p) =>
        (this.data.pokemon = { name: p.name, img: p.sprites.front_default }),
      error: "Uh oh, something has gone wrong.",
    });
  }

  apiText() {
    $.ajax({
      url: "https://baconipsum.com/api/?type=all-meat",
      dataType: "json",
      success: (t) => (this.data.text = t[0]),
      error: "Uh oh, something has gone wrong.",
    });
  }
}
