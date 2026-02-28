//question 4 - find the smallest element in the marks array

let marks=[10,20,30,40,5];
let smallest=marks[1];
for(i=0;i<marks.length;i++)
{
    if(marks[i]<smallest)
        smallest=marks[i];
}
console.log("smallest number in the array is "+smallest);