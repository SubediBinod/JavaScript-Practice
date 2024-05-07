// Promise = An object that manages asynchronous operations. 

// Wrap a promise object around {asynchronous code }

// "I promise to return a value"

// PENDING-> RESOLVED or REJECTED 

// new Promise ((resolve,reject)=>{asynchronous code})

// Promises are a modern alternative to callbacks for managing asynchronous operations in JavaScript. 

//They provide a cleaner and more readable way to handle asynchronous code, especially when dealing with multiple asynchronous tasks.

//example::
//The castSpell function simulates casting a magic spell.
// It returns a promise that resolves if the spell is successfully cast (80% success rate) and rejects if the spell fails.
// Simulate a magic spell casting with a promise
function castSpell(spellName) {
    return new Promise((resolve, reject) => {
        console.log(`Casting ${spellName}...`);
        setTimeout(() => {
            const success = Math.random() < 0.8; // 80% success rate
            if (success) {
                resolve(`Successfully cast ${spellName}!`);
            } else {
                reject(new Error(`Failed to cast ${spellName}.`));
            }
        }, 2000);
    });
}

// Harry Potter's adventure with promises
castSpell("Expecto Patronum")
    .then(result => {
        console.log(result);
        return castSpell("Expelliarmus");
    })
    .then(result => {
        console.log(result);
        return castSpell("Lumos");
    })
    .then(result => {
        console.log(result);
        return castSpell("Avada Kedavra");
    })
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error("Oh no! Voldemort's spell backfired:", error.message);
    });


