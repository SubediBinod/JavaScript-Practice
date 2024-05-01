// nested objects : objects inside of other objects.
// It allows you to represent more complex data structures 
// child object is enclosed by a parent object 

// Person{Address{},Contact{}}

const harryPotter = {
    areYouPotterHead: true,
    mainCharacters: {
        harry: {
            name: 'Harry Potter',
            house: 'Gryffindor',
            bestFriend: 'Ron Weasley',
            pet: 'Hedwig'
        },
        hermione: {
            name: 'Hermione Granger',
            house: 'Gryffindor',
            bestFriend: 'Harry Potter',
            pet: 'Crookshanks'
        },
        ron: {
            name: 'Ron Weasley',
            house: 'Gryffindor',
            bestFriend: 'Harry Potter',
            pet: 'Scabbers'
        }
    },
    firstBook: {
        title: 'Harry Potter and the Philosopher\'s Stone',
        year: 1997
    },
    latestBook: {
        title: 'Harry Potter and the Deathly Hallows',
        year: 2007
    }
};

console.log(harryPotter.areYouPotterHead); // Output: J.R.R. Tolkien
console.log(harryPotter.mainCharacters.harry.house); // Output: Gryffindor
console.log(harryPotter.latestBook.title); // Output: Harry Potter and the Deathly Hallows



