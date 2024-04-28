// .filter() = creates a new array
//  by filtering out elements

// using filter to sort child, teenagers, adult and old aged ages 


const age=[14,6,18,10, 12, 3,2, 75, 25, 35, 5, 80 ]

const child= age.filter(Child)
const teen= age.filter(teens)
const adult= age.filter(adults)
const old= age.filter(olds)

console.log(" child: " + child)
console.log(" teen: " + teen)
console.log(" adult: " + adult)
console.log(" old: " + old)


function Child(element) {
    return  element <12
}
function teens(element) {
    return  (element >12 && element <20)
}
function adults(element) {
    return  (element >=20 && element <=60)
}
function olds(element) {
    return  element >60
}