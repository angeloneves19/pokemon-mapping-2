const pkm = require("./api")

const pokemon2 = (status) => {
  const id = status.map(identificacao => identificacao.id)
  const nome = status.map(nome => nome.name)
  const type = status.map((tipo) => tipo.types[0].type.name).slice(1)
  const blaze = status.map(ab => ab.abilities[0].ability.name).slice(1)
  const solar = status.map(ab => ab.abilities[1].ability.name).slice(1)
  const abilitie = blaze.concat(solar)
  const atributos = (indexDoAtributo) => {
    const resultadoFinalDoAtributo = pkm.map(atributos => atributos.stats[indexDoAtributo].base_stat).slice(1).pop()
    return resultadoFinalDoAtributo
}
return { 
    id: id[0] ,
    name: nome[0],
    types: type, // Array de string
    abilities: abilitie, // Array de string
    attributes: {
        hp: atributos(0),
        attack: atributos(1),
        specialAttack: atributos(3),
        defense: atributos(2),
        specialDefense: atributos(4),
        speed: atributos(5)
    },
    moves: [
        {
        name: String,
        lv: Number
        }
    ]
    }
}


// console.log(pokemon2(pkm))
const moves = () =>{
let test = pkm.filter(test => test.moves[0].version_group_details[0].version_group.name === 'red-blue')
return test.map(testt => testt.moves.move.name == 'machine')
}
 console.log(moves())



//const test1 = pkm.map(ab => ab.abilities[0].ability.name).slice(1)
//const test2 = pkm.map(ab => ab.abilities[1].ability.name).slice(1)
//console.log(test1.concat(test2))
//const test = tipo.map(nome => nome.name)
