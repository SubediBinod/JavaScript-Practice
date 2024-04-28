// // .reduce() : reduce the element of an array 
// // to a single value 

//ex1

const price = [5,6,10,50,30,23]

const total=price.reduce(sum)

console.log(total)

function sum(accumulator, element){
    return accumulator+element
}

// // pr  sum(previous, current)
// //flow of program:

// sum(0,5)
// sum(5,6)
// sum(11,10)
// .
// .
// .


//ex2
// to find the minimum and maximum 

const num=[70,43,6,2,65,23,7,4,2,35,22,7,2,54]

const min=num.reduce(Minimum)
const max= num.reduce(Maximum)


console.log(" Minimum element in the array is : "+min)
console.log(" Maximum element in the array is : "+max)


function Maximum(a,b){
    return Math.max(a,b)
}

function Minimum(a,b){
    return Math.min(a,b)
}