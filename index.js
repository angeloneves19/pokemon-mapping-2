const pkm = require("./api");

const pokemon2 = (status) => {
  const id = status.map((identificacao) => identificacao.id);
  const nome = status.map((nome) => nome.name);
  const type = status.map((tipo) => tipo.types[0].type.name).slice(1);
  const blaze = status.map((ab) => ab.abilities[0].ability.name).slice(1);
  const solar = status.map((ab) => ab.abilities[1].ability.name).slice(1);
  const abilitie = blaze.concat(solar);
  const atributos = (indexDoAtributo) => {
    const resultadoFinalDoAtributo = status
      .map((atributos) => atributos.stats[indexDoAtributo].base_stat)
      .slice(1)
      .pop();
    return resultadoFinalDoAtributo;
  };

  return {
    id: id[0],
    name: nome[0],
    types: type, // Array de string
    abilities: abilitie, // Array de string
    attributes: {
      hp: atributos(0),
      attack: atributos(1),
      specialAttack: atributos(3),
      defense: atributos(2),
      specialDefense: atributos(4),
      speed: atributos(5),
    },
    moves: [
      { name: nameMoves(3), lv: levelMovies(3) },
      { name: nameMoves(3), lv: levelMovies(3) },
      { name: nameMoves(3), lv: levelMovies(3) },
      { name: nameMoves(3), lv: levelMovies(3) },
      { name: nameMoves(3), lv: levelMovies(3) },
      { name: nameMoves(3), lv: levelMovies(3) },
      { name: nameMoves(3), lv: levelMovies(3) },
      { name: nameMoves(3), lv: levelMovies(3) },
    ],
  };
};

//console.log(pokemon2(pkm));

console.log(
  pkm.map((a) =>
    a.moves.map((b) =>
      b.version_group_details
        .map((a) => a.move_learn_method.name)
        .filter((a) => a !== "machine" && a !== "tutor")
    )
  )
);
//console.log(pkm.map(a => a.moves.find(b => b.move)))

//name
const tests = (nome) => {
  const nick = pkm.map((a) => a.moves.find((b) => b.move.name == nome));
  return nick.map((nome) => nome.move.name).slice(1);
};
//console.log(tests("scratch"))

//level
const testsss = (nomeLevel) => {
  const nick = pkm.map((a) => a.moves.find((b) => b.move.name == nomeLevel));
  const test = nick.map((lv) =>
    lv.version_group_details.find(
      (c) =>
        c.version_group.name == "red-blue" &&
        c.version_group.name !== "machine" &&
        c.version_group.name !== "tutor"
    )
  );
  return test
    .map((a) => a.level_learned_at)
    .slice(1)
    .pop();
};

//console.log(testsss("scratch"))
//console.log(test.map(a => a.level_learned_at).slice(1).pop())

//const nome = pkm.map((a) => a.moves.find((b) => b.move.name == "growl"));

// const moves = () => {
// const nome = filtragemMovies.map((filtroName) => filtroName.moves[3].move.name).slice(1).pop();
// console.log(filtroName)
//return nome;
//};

// const moves24 = () => {
//   const numero = filtragemMoviess.map((filtroLv) => filtroLv.moves[3].version_group_details[0].level_learned_at).slice().pop();
//     return numero;
// }

// console.log(moves24())
//console.log(filtragemMovies)

//console.log(moves())

//console.log(nome.map((c) => c.version_group_details.map((a) => a.level_learned_at)))

//const test1 = pkm.map(ab => ab.abilities[0].ability.name).slice(1)
//const test2 = pkm.map(ab => ab.abilities[1].ability.name).slice(1)
//console.log(test1.concat(test2))
//const test = tipo.map(nome => nome.name);
