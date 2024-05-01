class  person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(country,state,city){
        this.country = country;
        this.state = state;
        this.city = city;
    }
}

const person1 = new person("hari bahadur", 40, "Nepal", "Bagmati", "Dhunge Bagar");

console.log(person1.address.city);