const pkm = require("./api")

const mapeandoDados = (status) => {
}
mapeandoDados(pkm)

const pokemon2 = (status) => {
  const id = status.map(identificacao => identificacao.id)
  const nome = status.map(nome => nome.name)
  const type = status.map(types => types.type.name)
return { 
    id: id[0] ,
    name: nome[0],
    types: '', // Array de string
    abilities: Array, // Array de string
    attributes: {
        hp: Number,
        attack: Number,
        specialAttack: Number,
        defense: Number,
        specialDefense: Number,
        speed: Number
    },
    moves: [
        {
        name: String,
        lv: Number
        }
    ]
    }
}
//  console.log(pokemon2(pkm))
// console.log(pkm.map((tipo) => tipo.types[0].type.name))
const pokemonType = tipos => {
    return tipos.map(tipo => tipo.type.name)
}
console.log(pokemonType(pkm.types))
