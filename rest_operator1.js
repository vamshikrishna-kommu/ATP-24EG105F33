//write a function that recieves any no of args and return their sum

const findSum = (...numbers) => {
    let sum = numbers.reduce((accumulator,element)=> accumulator + element);
    return sum;
}
console.log(findSum(10, 20, 30, 40));
