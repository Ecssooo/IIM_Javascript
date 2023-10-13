class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }
  isLucky() {
    return Math.random() < this.luck;
  }
  attackPokemon(attaquant, defenseur) {
    var degats = 0;
    degats = attaquant.attack - defenseur.defense;
    defenseur.hp -= degats;
    return degats;
  }
}

let pokemon1 = new Pokemon("salameche", 15, 5, 25, 0.5);
let pokemon2 = new Pokemon("bulbizarre", 10, 5, 35, 0.5);

while (pokemon1.hp >= 0 && pokemon2.hp >= 0) {
  let degats = 0;
  if (pokemon1.isLucky()) {
    degats = pokemon1.attackPokemon(pokemon1, pokemon2);
  }
  console.log(
    "vie de " + pokemon2.name + " " + pokemon2.hp + " degats pris : " + degats
  );

  if (pokemon2.hp <= 0) {
    console.log(pokemon2.name + " n'a plus de vie");
    break;
  }
  luck = pokemon2.isLucky();
  if (pokemon2.luck) {
    degats = pokemon2.attackPokemon(pokemon2, pokemon1);
    console.log(
      "vie de " + pokemon1.name + " " + pokemon1.hp + " degats pris : " + degats
    );

    if (pokemon1.hp <= 0) {
      console.log(pokemon1.name + " n'a plus de vie");
      break;
    }
  }
}


console.log(pokemon1)