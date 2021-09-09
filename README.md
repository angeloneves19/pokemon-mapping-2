# Trabalhando com a função MAP

A função `map` existente em estruturas de dados `Array` nos ajuda a 
criar um mapeamento de objetos de uma forma mais facil. Assim permitindo ao
programador transformar estruturas de objetos complexas em objetos mais simples.

Nesse exercicio vamos trabalhar esse conceito de transformar um objeto complexo, em um objeto mais simples através da analise e associação.

em `api.js` temos um exemplo de um objeto complexo que representa um pokemon
existente no site `pokeapi`.

vamos tentar transformar esse objeto na estrutura de objeto que trabalhamos
anteriormente no exercicio `pokemonObject`

* Observações: 
  - Apenas os moves que são da versão `red-blue` devem ser retornados para o objeto.
  - Ordenar os moves em ordem crescente
  - Não devem ser filtrados moves que tenha `move_learn_method.name` igual a `machine` ou `tutor`

```javascript
const pokemon = {
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

```
Um breve `spoiler`, esse é o retorno esperado no final do exercicio:

```bash
[
  {
    id: 4,
    name: 'charmander',
    types: [ 'fire' ],
    abilities: [ 'blaze', 'solar-power' ],
    attributes: {
      hp: 39,
      attack: 52,
      specialAttack: 60,
      defense: 43,
      specialDefense: 50,
      speed: 65
    },
    moves: [
      { name: 'scratch', lv: 1 },
      { name: 'leer', lv: 15 },
      { name: 'growl', lv: 1 },
      { name: 'ember', lv: 9 },
      { name: 'flamethrower', lv: 38 },
      { name: 'fire-spin', lv: 46 },
      { name: 'rage', lv: 22 },
      { name: 'slash', lv: 30 }
    ]
  }
]
```