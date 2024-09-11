const marvel_heroes = ["spiderman", "batman", "hulk", "thor"]
const dc_heroes = ["loki", "x-men" , "flash"]
const indian_heroes= ["krrish", "flying-jatt", "shaktiman"]
// console.log(marvel_heroes)
// console.log(dc_heroes)

// => if you want to merge two arrays you can use concat method like this
// console.log(marvel_heroes.concat((dc_heroes)));

// => if you want to merege more than 3 arrays then we use spread method
// console.log( ...dc_heroes, ...indian_heroes, ...marvel_heroes) 

// const newHeroes = [...dc_heroes, ...indian_heroes, ...marvel_heroes]
// console.log(newHeroes)

// => flat
// const array = [5,2,3,[6,5,89,[41,25,36,85,[1,3,4,5,[96]]]]]
// const newArray=array.flat(Infinity)
// console.log(newArray)

// console.log(Array.isArray("vishal"))

// console.log(Array.from("vishal"));

// console.log(Array.from({name : "vishal"})); //interesting***************

let score1= 300;
let score2 =400;
let score3= 600;
console.log(Array.of(score1, score2, score3)) //it returens a array**************