/*
Simple game console app

6 Knights stand in a circle
Each knight has 100 health points
Every knight hits his neighbor in a clockwise way (damage is random between 1-6 like rolling a dice)
When a knight has <= 0 health, he is out of the game
Example: If knight 1 kills knight 2, knight 1 will hit knight 3 in the next round
Repeat until only one knight is left

Outputs:
Knight x hits Knight y for n damage
Knight x dies
Knight x wins
*/

const knights = [
  { name: "K1", health: 100 },
  { name: "K2", health: 100 },
  { name: "K3", health: 100 },
  { name: "K4", health: 100 },
  { name: "K5", health: 100 },
  { name: "K6", health: 100 }
];

function damage(health) {
  return Math.round(health - Math.random() * 6);
}

let firstRound = true;
while (knights.length > 1) {
  for (let i = 0; knights.length > i; i++) {
    if (firstRound) {
      firstRound = false;
    } else {
      const startHealth = knights[i].health;
      knights[i].health = damage(knights[i].health);
      if (knights[i].health <= 0) {
        console.log(`${knights[i].health} dies`);
        knights.splice(i, 1);
      } else {
        if (i !== 0) {
          console.log(
            `${knights[i - 1].name} hits ${knights[i].name} by ${startHealth -
              knights[i].health} damage points`
          );
        } else {
          console.log(
            `${knights[knights.length - 1].name} hits ${
              knights[i].name
            } by ${startHealth - knights[i].health} damage points`
          );
        }
      }
    }
  }
}

console.log(`${knights[0].name} win the game`);
