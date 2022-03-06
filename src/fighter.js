/* Fighter class definition */
export const MAX_LIFE = 100;

export class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }

    toString() {
        return `${this.name}: ${this.life}`
    }

    fight(enemy) {
        const damageDone = Math.round(Math.random() * this.strength);
        const damageMinusDefense = Math.max(damageDone - enemy.dexterity, 0);
        enemy.life = Math.max(enemy.life - damageMinusDefense, 0);

        return `${this.name} 🗡️ ${enemy.name} 💙 ${enemy.life}`;
    }

    isAlive() {
        return this.life > 0;
    }
}