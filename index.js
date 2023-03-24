const pkm = require("./api")

const pokemon2 = (status) => {
return {
    id: Number,
    name: String,
    types: Array, // Array de string
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
 console.log(pokemon2())
