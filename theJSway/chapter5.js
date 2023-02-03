const dog = {
    name: "Fang",
    species: "boarhound",
    size:  75,
    bark: "Grrr! Grrr!"
  };
  
function describeFang() {
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
}

const account = {
    name: "Alex",
    balance: 0,
    credit(addThis) {
        balance += addThis;
    },
    describe(){
        console.log(`owner: ${account.name}, balance ${account.balance}`)
    }
}
