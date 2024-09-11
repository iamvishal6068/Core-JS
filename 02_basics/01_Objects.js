let obj1 = {
    name: "vishal",
    age: 21,
    fullName: "vishal kumar",
    location: "Jlandhar",
    isLoggedIn : true,
    loginDays: ["monday", "Tuesday", "Wednesday", "Thursday"]
}
//This is aam zindagi............
// console.log(obj1.fullName)
// console.log(obj1.name)
// console.log(obj1.loginDays)

//This is js coder pro zindagi.....
// console.log(obj1["age"])
// console.log(obj1["fullName"])
// console.log(obj1["isLoggedIn"])

// Ques: an interview say to define a symbol and define it as a key 
// as a keys and show me the output after accesing that special key???


let specialSym= Symbol("myKey1")
let obj2={
    name:"Raghav",
    age:20,
    [specialSym] : "myKey1", // after writing like this this symbol treat as a symbol and also you can check the type also
    isLoggedIn: true

}
console.log(obj2[specialSym])
//so if you want to do any changes in an object just simply write this code.....
//firstly acces that object 
//and then assign a new value here like this............
obj1.name = "vishalSharma"
// Object.freeze(obj1) // after freezing the object nobody can change the name or anything
obj1.name=  "anirudhSharma";
// console.log(obj2)

obj1.greetings = function()
{
    console.log("hello js userrrr");
}
console.log(obj1.greetings())

obj1.greetings2 = function()
{
    console.log(`hello js userrrr ${this.fullName}`);
}
console.log(obj1.greetings2())