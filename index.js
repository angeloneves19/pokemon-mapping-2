const pkm = require("./api")


const pokemon2 = (status) => {
return { 
    id: status[0].id,
    name: status[0].name,
    types: status[0].types[0].type.name, // Array de string
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
 //console.log(pokemon2(pkm))


console.log(pkm.filter(nome => nome.moves.nome))