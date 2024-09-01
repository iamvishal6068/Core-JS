// Conversions

let num =64;
let numString = String(num);
console.log(numString);
console.log(typeof numString);

// here we convert a number into the string type...

let name= "Vishal"
let nameNumber = Number(name);
console.log(nameNumber) //it gives us a output of Nan
console.log(typeof nameNumber) // it gives us a output of number type.

// here we convert a string into the number type...


/* Operations*/

let value = 89;
let negValue = -value;
console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4)  this means 2 raise to the power 4
// console.log(2/2) 
// console.log(2%2) it gives us a remainder value

let str1 = "hello"
let str2= " vishal"
let str3 = str1 + str2;
console.log(str3)

console.log("2" + 2 + 2+ 2) // the first operator has a higher presidence so it converts whole into a string 2222
console.log( 2 + 2+ 2+ "3"); //  63

console.log(+true); //1
console.log(+"") //0

let x=5
let y= x++  //it gives us a output of 5 bcz it firstly print the value of x and then increment its value;
let z=++x   //it gives us a output of 6 bcz it firstly increment the value and then print the value of x.
console.log(y)
console.log(z);