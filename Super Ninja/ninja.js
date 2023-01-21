class Ninja{
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("Name: " + this.name)
    }
    showStats(){
        console.log("Name: " + this.name) 
        console.log("Health: " + this.health)
        console.log("Speed: " + this.speed)
        console.log("Strength: " + this.strength)
    }
    drinkSake(){
        this.health += 10
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor (name){
    super(name)
    this.health = 200
    this.speed = 10
    this.strength = 10
    this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake()
        console.log("'The invariable mark of wisdom is to see the miraculous in the common.'")
    }
}

const superSensei = new Sensei("The Wise One");
superSensei.speakWisdom();
superSensei.showStats();
