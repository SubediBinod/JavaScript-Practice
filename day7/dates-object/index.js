// Date objects contains the values that represent Dates 
// and Time
// These Date Objects can be changed and formatted


const date=new Date()
console.log(date ) // gives current date

//create own custom  date object
// Date(year, month, day, hour, minute, second,milliseconds)
const date1= new Date(2024,0,1,2,3,4,5)
console.log(date1)
//date1 will be initialized to January 1, 2024, 
//at 02:03:04.005 in the local time zone of the 
//JavaScript environment where it runs.


const year= date1.getFullYear()
const month= date1.getMonth()
const day= date1.getDate()
const hour= date1.getHours()
const minute= date1.getMinutes()
const dayOfWeek= date1.getDay()
console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minute)
console.log(dayOfWeek)




date.setFullYear(2024)
date.setMonth(0)
date.setDate(year)
date.setHours(1)
date.setMinutes(40)
date.setSeconds(60)
console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minute)
console.log(dayOfWeek)
