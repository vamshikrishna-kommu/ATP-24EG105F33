// question 5 - write a function that receives 3 number args and return the big number
function bigNumber(a,b,c)
{
    if(a>b && a>c){
        return a;
    }  else if(b>a && b>c){
        return b;
    } else if(c>a && c>b){
        return c;
    } else{
        return "all the numbers are equal";
    }
}
let result=bigNumber(10,20,30);
console.log("the big number is "+result);