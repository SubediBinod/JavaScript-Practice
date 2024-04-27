// forEach()= method is used to iterate over the Element
// of an array and apply a specified function(callback)
// to each Element

// array.forEach(callback)
// Element,index, array are provided

// element: Represents the current element being processed in the array.
// index: Represents the index of the current element being processed.
// array: Represents the array on which forEach() is called (in this case, it's the arr array).

// using for each to  capitalize ,upper and lower an arrays element 
let arr=["apple", "orange", "cheese", "catalog", "honeybreak", "lost"]

//arr.forEach(capitalize)
arr.forEach(upper)
//arr.forEach(lower)

arr.forEach(display)


function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1)
}// slice is not only used with arrays but also can be used with a string

function lower(element,index,array){
    array[index] = element.toLowerCase()
}
function upper(element,index,array){
    array[index] = element.toUpperCase()
}

function display(element)
{
    console.log(element)
}