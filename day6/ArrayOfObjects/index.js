// Define an array of objects
var cars = [
    { brand: 'Toyota', model: 'Corolla', year: 2018 },
    { brand: 'Honda', model: 'Civic', year: 2019 },
    { brand: 'Ford', model: 'Mustang', year: 2020 }
];

// Accessing elements in the array
console.log(cars[0]); // Output: { brand: 'Toyota', model: 'Corolla', year: 2018 }

// Iterating over the array of objects
cars.forEach(car=> {
    console.log(car.brand + ' ' + car.model + ' (' + car.year + ')');
});
/*
Output:
Toyota Corolla (2018)
Honda Civic (2019)
Ford Mustang (2020)
*/
