// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

let temperatures=[32, 35, 28, 40, 38, 30, 42]
console.log("temperatures are ",temperatures)
//1. filter() temperatures above 35
    let r1=temperatures.filter(element=>element>35)
    console.log("temperatures above 35 are ",r1)
//2. map() to convert all temperatures from Celsius → Fahrenheit
    let r2=temperatures.map(element=>element*9/5+32)
    console.log("temperatures in fahrenheit are ",r2)
//3. reduce() to calculate average temperature
    let sum=temperatures.reduce((accumulator,element)=>accumulator+element)
    let r3=sum/temperatures.length
    console.log("average temperature is ",r3)
//4. find() first temperature above 40
    let r4=temperatures.find(element=>element>40)
    console.log("first temperature above 40 is ",r4)
//5. findIndex() of temperature 28
    let r5=temperatures.findIndex(element=>element==28)
    console.log("index of temperature 28 is ",r5)
