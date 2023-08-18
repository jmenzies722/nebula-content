// Import the readline module from Node.js to handle terminal I/O
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the Person class
class Person {
  constructor(name, age, height, coins) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.coins = coins;
  }

  // Method for the character introduction
  introduction() {
    return `Hello, my name is ${this.name}. I am ${this.age} years old, my height is ${this.height} cm and I have ${this.coins} coins.`;
  }

  // Method for giving coins from one person to another
  giveCoins(otherPerson, amount) {
    this.coins -= amount;
    otherPerson.coins += amount;
    return `${this.name} gives ${amount} coins to ${otherPerson.name}!`;
  }
}

// Warrior class extending Person
class Warrior extends Person {
  constructor(name, age, height, coins, strength) {
    super(name, age, height, coins);
    this.strength = strength;
  }

  // Introduction method updated to include strength
  introduction() {
    return `${super.introduction()} My strength is ${this.strength}.`;
  }
}

// Mage class extending Person
class Mage extends Person {
  constructor(name, age, height, coins, intelligence) {
    super(name, age, height, coins);
    this.intelligence = intelligence;
  }

  // Introduction method updated to include intelligence
  introduction() {
    return `${super.introduction()} My intelligence is ${this.intelligence}.`;
  }
}

// Player and NPC instances
let player, npc;

// Function to start the game
function startGame() {
  rl.question('Welcome to RPG Coin Exchange Game. Press any key to start.', (start) => {
    player = new Person("Rick", 25, 180, 200);
    npc = new Person("NPC", 30, 170, 100);
    console.log(player.introduction());
    console.log(npc.introduction());
    gameMenu();
  });
}

// Function to provide game menu
function gameMenu() {
  console.log("Choose an action:\n1. Give Coins\n2. Get Character Information\n3. Exit Game");
  rl.question('Your choice: ', (choice) => {
    switch(choice) {
      case '1':
        giveCoins();
        break;
      case '2':
        getCharacterInfo();
        break;
      case '3':
        console.log("Exiting Game...");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Try again.");
        gameMenu();
        break;
    }
  });
}

// Function to handle giving coins
function giveCoins() {
  rl.question('Enter the amount of coins you want to give to NPC: ', (amount) => {
    console.log(player.giveCoins(npc, Number(amount)));
    gameMenu();
  });
}

// Function to get character information
function getCharacterInfo() {
  console.log(player.introduction());
  console.log(npc.introduction());
  gameMenu();
}

// Call the function to start the game
startGame();
