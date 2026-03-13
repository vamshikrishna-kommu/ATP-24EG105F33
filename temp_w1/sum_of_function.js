// question 6 - write a function that receives an array as arg and return their sum 
a=[10,20,30,40,50];
sum=0;
function findsum(a)
{
    for(let i=0; i<a.length; i++)
    {
        sum += a[i];
    }
    return sum;
}
let result = findsum(a);
console.log("the sum of the array is "+result);
