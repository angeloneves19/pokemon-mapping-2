const pkm = require("./api")
const organizandoPokemon = (pokemon) => {
    return pokemon.map(movies => movies.stats[0])
}
console.log(organizandoPokemon(pkm))
