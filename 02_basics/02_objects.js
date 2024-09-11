// const tinderUser = new Object() // this is called singleton object..............
// const tinderUser = {} // this is a non singelton object..................

const profileTinder = {}
profileTinder.id = "abc123"
profileTinder.name ="Vishal"
profileTinder.isLoggedIn = false

// console.log(profileTinder)
// ******************************************************
// this is known as nesting of objects

const regularUser = {
    name : {
        fullName: "vishal",
        address: {
            fulladdress : "wadala Pind"
        }
    }
}

// console.log(regularUser.name.fullName) ...-> we can access keys by using dot.

// *******************************************

const obj1 = { 1: "a", 2: "b"}
const obj3 = { 3: "c", 4: "d"}
const obj4 = Object.assign({}, obj1 , obj3) // this object.assign combines the two objects

const obj5 = {...obj1, ...obj3}
// console.log(obj5) // instead of assign method we use spread operator..........

// console.log(obj4)

// *************************************************
//when the data is coming from the database th object is coming in the formate of array in which many objects are have....
// like this:.....................

const userdata1 = [
    {
        name:"vishal",
        age: 21
    },
    {
        name: "arun dhawan",
        age: 65
    },
    {

    }
    // ,....................and so on
]

// we can access values and keys of object like this in a formate of array

// console.log(Object.keys(profileTinder)); //by using this we can get all the keys of a object and after that we can also put a loop here for knowing the data.

// console.log(Object.values(profileTinder));
// console.log(Object.entries(profileTinder));

// ===============Object Destructure=================

const course = {
    courseName : "js in hindi",
    instructor : "hitesh Sir",
    fees: "null"

}

// console.log(course.courseName) // but in destructuring of object we write like this

const {instructor : teacher} = course //like this we destructure instructor into teacher and we dont hve have to define again
// and gain like this course.bla bla bla.........
console.log(teacher)

// ********************
// and same like this we use in react for de-structuring example: ----


const navbar= ({companyname})=>{
    
}
navbar(companyname= "vishal")