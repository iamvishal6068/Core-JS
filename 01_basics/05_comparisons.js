// console.log(2>2)
// console.log(2<2)
// console.log(2>=2)
// console.log(2<=2)
// console.log(2==2)

// console.log(null>0)  //false
// console.log(null<0)  //false
// console.log(null ==0) //flase
// console.log(null>=0)  //true
// console.log(null<=0) //true

/* The reason behind ture is the equality check and comparisions work differently 
comparisons convert null to a number that is why null>=0 and null<=0 becomes true*/

console.log(undefined >=0) //false
console.log(undefined<=0) //false

// strict checkk ===
// console.log("2"===2) false
console.log("2" == 2) //true