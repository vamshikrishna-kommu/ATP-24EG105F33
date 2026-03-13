//question 7 - write a function that receives an array and search element as args and returns the index of that
//  search element in the array . it should return "not found" when search element is not found

let a=[10,20,30,40,50];
let search=50;
let index;
function searchNum(a,search)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]==search)
        {
            return index=i;
        }
    }
    return index="not found";
}
let result = searchNum(a,search);
console.log(index);