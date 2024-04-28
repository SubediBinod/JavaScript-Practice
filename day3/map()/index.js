// .map() accepts a callback and applies the function
//  to each element of an array then return a new array

//this is similar to forEach() except that map() method
//creates a new array we still have an original array


//Ex1

const num= [1,2,3,4,5,6,7,8,9,10,11]


const square= num.map(squares)


console.log(square)


function squares(Element){
    return Math.pow(Element,2)
} 

// output:[
//     1,  4,  9, 16,  25,
//     36, 49, 64, 81, 100,
//    121
//  ]


// ex2 : to format the dates


const dates=["2059-06-12", "2002-09-28","2024-09-22"]

const formatted_dates = dates.map( formatDates)


console.log(formatted_dates)

function formatDates(element){
    const temp= element.split("-")
    return `${temp[2]}/ ${temp[1]}/ ${temp[0]}`// use backtick not single quotes because
}


//output: