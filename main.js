const response = require("./api")

const adapterAbilities = (abilities) => {
  return abilities.map(ab => ab.ability.name)
}

const adapterPokemon = (response) => {
  return response.map(pokemon => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      abilities: adapterAbilities(pokemon.abilities)
    }
  })
}

const pokemon = adapterPokemon(response)
console.dir(pokemon, { depth: 999 })
