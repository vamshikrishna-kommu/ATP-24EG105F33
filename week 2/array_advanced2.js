// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"


const courses = ["javascript", "react", "node", "mongodb", "express"];
//1. filter() courses with name length > 5
    let r1=courses.filter(element=>element.length>5)
    console.log("courses with name length > 5 are ",r1)
//map() to convert course names to uppercase
    let r2=courses.map(element=>element.toUpperCase())
    console.log("course names in uppercase are ",r2)
//3. reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
    let r3=courses.reduce((accumulator,element)=>accumulator.toUpperCase()+" | "+element.toUpperCase())
    console.log("single string of course names is ",r3)
//4. find() the course "react"
    let r4=courses.find(element=>element=="react")
    console.log("course react is ",r4)
//5. findIndex() of "node"
    let r5=courses.findIndex(element=>element=="node")
    console.log("index of course node is ",r5)