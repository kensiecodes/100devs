//understand object-oriented programming

//exercise 1.0 | Dogs
//to do: define Dog class

//my code
class Dog {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }
    bark() {
        return this.size > 60 ? "Grrr! Grrr!" : "Woof! Woof!"
    }
}

//end my code

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// exercise 2.0 | character inventory
//to do:
//A character's inventory contains a number of gold and a number of keys.
//Each character begins with 10 gold and 1 key.
//The character description must show the inventory state.
//When a character slays another character, the victim's inventory goes to its vanquisher.
// ** denotes edited lines

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10 //gold is always 10 for new characters **
      this.keys = 1 //keys are always 1 for new characters **
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold, and ${target.keys}` //**
          );
          this.xp += bonusXP;
          this.gold += target.gold; //**
          this.keys += target.keys; //**
        }
      } else {
        console.log(`${this.name} can’t attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.gold} gold, and ${this.keys} key(s)`; //**
    }
  }

  //exercise 3.0  |  account list
  //to do:
  //create three account objects
  //credit each 1000
  //show each in console
  //all original code

  class Account {
    constructor(name) {
      this.name = name
      this.balance = 0
    }
    credit(add) {
        this.balance += add
    }
    describe() {
      console.log(`owner: ${this.name}, balance: ${this.balance}`)
    }
  }
  
  const Sean = new Account('Sean');
  const Brad = new Account('Brad');
  const Georges = new Account('Georges');
  
  Sean.credit(1000);
  Brad.credit(1000);
  Georges.credit(1000);

  Sean.describe()
  Brad.describe()
  Georges.describe()


