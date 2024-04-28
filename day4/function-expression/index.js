// function expression is a way to define a function 
// as values or variables


//steps
//create a function
//remove its name 
//place that unnamed function inside function


const arr=[1,6,3,8,5,9,2]

const square=arr.map(function (element){
    return Math.pow(element,2)
})

square.forEach(function (element){
    console.log(element)
}
)