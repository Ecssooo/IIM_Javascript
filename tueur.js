const prenoms = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Katie",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
];

const carateristiques = [
  ["nerd", 0.4, 0.3, 0.3],
  ["sportif", 0.2, 0.1, 0.7],
  ["blonde", 0.33, 0.33, 0.33],
  ["rat", 0.1, 0.5, 0.4],
  ["n", 0.6, 0.4, 0],
];

class Tueur {
  constructor() {
    this.hp = 100;
    this.tuer = [];
  }
}

class Survivants {
  constructor(name, classe) {
    this.names = name;
    this.classe = classe;
  }

  getAttack(tueur, survivants, attaque) {
    let valeur = Math.random();
    let index = survivants.indexOf(attaque);

    if (valeur <= this.classe[1]) {
      survivants.splice(index, 1);
      console.log(this.names + " est mort");
      tueur.tuer.push(this.names);
    } else {
      if (valeur > this.classe[1] && valeur <= 1 - this.classe[3]) {
        survivants.splice(index, 1);
        tueur.hp -= 10;
        console.log(this.names + " est mort et a infliger 10 dgts");
        tueur.tuer.push(this.names);
      } else {
        tueur.hp -= 15;
        console.log(this.names + " a infligé 15 dgts");
      }
    }
    return survivants;
  }
}

let survivants = [];
for (let i = 0; i < 5; i++) {
  nom = prenoms[Math.floor(Math.random() * prenoms.length)];
  classe = carateristiques[Math.floor(Math.random() * carateristiques.length)];
  survivants.push(new Survivants(nom, classe));
}

console.log(survivants);

function serie(survivants) {
  let jason = new Tueur();
  let bool = true;
  while (bool == true) {
    attack = survivants[Math.floor(Math.random() * survivants.length)];
    console.log(attack.names + " est attaqué");
    survivants = attack.getAttack(jason, survivants, attack);
    console.log("jason : " + jason.hp);

    if (jason.hp <= 0) {
      bool = false;
      console.log("Jason est mort");
    }
    if (survivants.length <= 0) {
      bool = false;
      jason.tuer.forEach(function (survivant) {
        console.log(survivant + " est mort");
      });
      console.log("Aucun survivants");
    }
  }
}

serie(survivants);