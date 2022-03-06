// Second Labour : Heracles vs boar
import { Fighter } from "./src/fighter.js";

// use your Figher class here
const heracles = new Fighter('🧔 Hercules', 20, 6);
const boar = new Fighter('🐗 Erymanthian Boar', 25, 12);

let round = 1;
while (heracles.isAlive() && boar.isAlive()) {
    console.log(`Round #${round}`);
    console.log(heracles.fight(boar));
    console.log(boar.fight(heracles));

    round++;
}

const deadFighter = (heracles.isAlive()) ? boar : heracles;
const winningFighter = (deadFighter === heracles) ? boar : heracles;

console.log(`💀 ${deadFighter.name}`);
console.log(`🏆 ${winningFighter.name}`);