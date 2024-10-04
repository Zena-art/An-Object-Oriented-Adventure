
/**
 * Part 1: Humble Beginnings
Let’s model a simple adventurer with basic properties such as health and an inventory. 
We will call the adventurer “Robin.”
 */

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
  }
  //From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].
// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
  
console.log(adventurer.inventory[0]);
adventurer.inventory.forEach(element => {
  console.log(element)
  });
  
  // Nested arrays are useful, but so are nested objects. Let’s give Robin a companion to travel with – a furry friend they call “Leo.”

  adventurer.companion = {
    name: 'Leo',
    type: 'Cat'
  }

/**
 * Next, give Robin’s feline friend a friend of his own:
Add a “companion” sub-object to “Leo” with the following properties:
The companion’s name is “Frank.”
The companion’s type is “Flea.”
The companion has its own belongings, which includes a small hat and sunglasses.
 */
adventurer.companion.friend = {
  name: "Frank",
  type: "Flea"
}
adventurer.companion.belongings = ['small hat', 'sunglasses'];

console.log(adventurer.companion);

//Give Robin the following method:
adventurer.roll(3);

class Character {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
}

