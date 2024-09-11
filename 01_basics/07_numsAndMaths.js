// const score =400;
// console.log(score);

// const balance =new Number(124.15) //it spcifically turns it into a number formate
// console.log(balance)

// console.log(balance.toString()) //it convert number into the string
// console.log(balance.toString().length) //it gives us the length of the balance

// console.log(balance.toFixed(2)) //it gives us the output of 100.00

// console.log(balance.toPrecision(1))

// const newNum = 1000000
// console.log(newNum.toLocaleString('en-IN')) //it converts the number into the readable formate

// ***********************MATHS******************************

console.log(Math)

// console.log(Math.abs(-4));
// console.log(Math.round(12.9)); // it goves us the round of result of the number
// console.log(Math.ceil(14.2)) // ceiling means upward value so it always gives a value which is more
// console.log(Math.floor(16.8)) // floor means downwards value it is always give a value which is less4

// console.log(Math.min(4, 8 , 9 ,10)) //it gives us the min value
// console.log(Math.max(89, 4 , 25 ,36)) it gives us the max value
// console.log(Math.random()) //it always gives the value around 0 and 1

// console.log(Math.floor((Math.random()*10 +1))); //here we add +1 so that the result will be not equal to zero. and also we multiply by 10 
// bcz we want the number ocuur on the left side before point.

const min= 1;
const max = 6;

// console.log(Math.floor(Math.random()* (max-min) + min))


// ========================DATES===========================
// const newDate =new Date()
// console.log(newDate)
// console.log(newDate.toDateString())
// console.log(newDate.toString())
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())
// console.log(newDate)

const date = new Date("08-09-2024")
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())

let timeStamp = Date.now()
console.log(timeStamp) //from 1 jan 1970 total milliscenonds

console.log(date.getTime())
console.log(Math.floor(Date.now()/1000)) //if you want seconds then do this