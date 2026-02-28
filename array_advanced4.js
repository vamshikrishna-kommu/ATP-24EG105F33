// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

const cart = [
   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
 ];

 //1. Use filter() to get only inStock products
    let r1=cart.filter(element=>element.inStock==true)
    console.log("inStock products are ",r1)
//2. Use map() to create a new array with:  { name, totalPrice }
    let r2=cart.map(element=>{
        return {
            name:element.name,totalPrice:element.price*element.quantity
        }
    })
    console.log("array with name and totalPrice is ",r2)
//3. Use reduce() to calculate grand total cart value
    let r3=cart.reduce((accumulator,element)=>accumulator+element.price*element.quantity,0)
    console.log("grand total cart value is ",r3)
//4. Use find() to get details of "Mouse"
    let r4=cart.find(element=>element.name=="Mouse")
    console.log("details of Mouse are ",r4)
//5. Use findIndex() to find the position of "Keyboard"
    let r5=cart.findIndex(element=>element.name=="Keyboard")
    console.log("position of Keyboard is ",r5)
