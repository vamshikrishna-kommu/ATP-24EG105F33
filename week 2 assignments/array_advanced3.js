// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const marks = [78, 92, 35, 88, 40, 67];
console.log("marks are ",marks)

//1. filter() marks ≥ 40 (pass marks)
    let r1=marks.filter(element=>element>=40)
    console.log("pass marks are ",r1)
//2. map() to add 5 grace marks to each student
    let r2=marks.map(element=>element+5)
    console.log("marks after adding 5 grace marks to each student are ",r2)
//3. reduce() to find highest mark
    let r3=marks.reduce((accumulator,element)=>accumulator > element?accumulator:element)
    console.log("highest mark is ",r3)
//4. find() first mark below 40
    let r4=marks.find(element=>element<40)
    console.log("first mark below 40 is ",r4)
//5. findIndex() of mark 92
    let r5=marks.findIndex(element=>element==92)
    console.log("index of mark 92 is ",r5)