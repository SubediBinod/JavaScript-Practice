// rest parameter=(..rest) allow a function work with a variable number
// of arguments by bundling them into an Array

// spread= expends an array into seperate Elements 
// rest= bundles seperate elements into an array 

function func1(...args){
    console.log(args)
}
func1(3,5,6,7,8,9,10,11,12,13,14,15)