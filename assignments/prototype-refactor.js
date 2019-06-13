/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(params){
        this.demensions = params.demensions;
        this.name = params.name;
        this.createdAt = params.createdAt;
    }
    destroy(){
        return `${this.name} was removed from the game`;
    }
}

class CharacterStats extends GameObject{
    constructor(params){
        super(params);
        this.healthPoints = params.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage` ;
    }
}

class Humanoid extends CharacterStats{
    constructor(params){
        super(params);
        this.team = params.team;
        this.weapons = params.weapons;
        this.language = params.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log('Today\'s date: ' + mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 } ?!!?!?!!?
console.log('Health points: ' + swordsman.healthPoints); // 15
console.log('Name: ' + mage.name); // Bruce
console.log('Team name: ' + swordsman.team); // The Round Table
console.log('Weapons: ' + mage.weapons); // Staff of Shamalama
console.log("Language: " + archer.language); // Elvish
console.log('Greeting: ' + archer.greet()); // Lilith offers a greeting in Elvish.
console.log('Damage status: ' + mage.takeDamage()); // Bruce took damage.
console.log('Remove status:' + swordsman.destroy()); // Sir Mustachio was removed from the game.
