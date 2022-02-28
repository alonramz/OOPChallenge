// Create a class called pokemon with a constructer that 
// takes in a name, type, and attack
// Create a method for this class that 
// console logs that the pokemon used its attack ex: 
// "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then 
// use the attack method for both of them.


//create class
//add constuctor
//add a method
//console log the method for the attack
//call 2 pokemon
//use method to attack both pokemon

class Pokemon {
    constructor(name, type, attack){
        this.name = name;
        this.type = type;
        this.attack = attack;
        // console.log(this);
    };

    startAttack(){
        console.log(`${this.name} used ${this.attack}`)
        
    }
    // trying to set a new attack 
    // setAttack(newAttack){ //method used to set a new attack to bulbasaur //setter
    //     this.attack = newAttack;
    //     console.log(`${this.name} used ${this.newAttack}`)
    // }
}

const bulbasaur = new Pokemon("Bulbasaur", "Grass", "Razor Leaf") //this is instantiate a new pokemon
const pickachu = new Pokemon("Pickachu", "Electric", "Thunderbolt")

bulbasaur.startAttack();
pickachu.startAttack();
// bulbasaur.setAttack();
