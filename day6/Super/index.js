// super: super keyword is used in class to call the constructor or access 
// the properties and methods of a parent (superclass)

// this=this object 
// super = the parent 

// The super keyword in JavaScript serves primarily two purposes in class-based inheritance:

// 1.To call a parent class constructor from a child class constructor.

class hogwarts {
    constructor(house,year,name){
        this.name = name;
        this.house =house;
        this.year = year;
    }
}

class student extends hogwarts {
    constructor(house,year,name){
        super(house,year,name);
    }
}

const harry= new student("Gryffindor",1,"harry potter")

console.log(harry.name)
console.log(harry.year)
console.log(harry.house)
/*
output::
harry potter
1
Gryffindor
*/

//2. To call a parent class method from a child class method.
class Character {
    constructor(name, house) {
        this.name = name;
        this.house = house;
    }
    introduce() {
        console.log(`Hello, I'm ${this.name} from ${this.house}.`);
    }
}


class Professor extends Character {
    constructor(name, house, subject) {
        super(name, house);
        this.subject = subject;
    }
    introduce() {
        super.introduce(); // Calls the introduce method from Character
        console.log(`I teach ${this.subject}.`);
    }
}

const snape = new Professor("Severus Snape", "Slytherin", "Potions");
snape.introduce();  
// Output: Hello, I'm Severus Snape from Slytherin.
// I teach Potions.

