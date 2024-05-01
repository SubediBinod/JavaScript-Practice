// getter & Setters are used to validate and modify
// a value when reading/writing a property 


class HogwartsStudent {
    constructor(name, house) {
        this.name = name;
        this._house = house; // We use _house to store the value internally
    }

    // Getter for house
    get house() {
        return this._house;
    }

    // Setter for house
    set house(value) {
        const validHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
        if (validHouses.includes(value)) {
            this._house = value;
        } else {
        console.log("NO such House exists!");
        }
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm from ${this.house}.`);
    }
}

let student = new HogwartsStudent("Hermione Granger", "Gryffindor");
student.introduce();  // Output: Hi, I'm Hermione Granger and I'm from Gryffindor.

// Let's try to change the house to an invalid one
student.house = "Griffinpuff"; // NO such House exists!

