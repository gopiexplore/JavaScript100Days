// FizzBuzz Challenge 
// Write a function fizzbuzz that accepts two numbers startNum and endNum, as input the function should return an array containing numbers 
// and specific strings based on the following rules 
// for each number i in the range from startNum to endNum (both inclusive)
// if i is divisivle by both 3 and 5 include "fizzbuzz" in the result 
// if i is divisible by only 3 include "fizz" in the result 
// if i is divisible by only 5 include buzz in the result 
// other wise include the number i itself
const fizzbuzz=(sNum,eNum)=>{
    let arr=[];
    for(let i=sNum;i<=eNum;i++){
        if(i%3==0 && i%5==0){
            arr.push("fizzbuzz");
        }
        else if(i%3==0){
            arr.push("fizz");
        }
        else if(i%5==0){
            arr.push("buzz");
        }
        else arr.push(i);
    }
    return arr;
}
console.log(fizzbuzz(1,15));
console.log(fizzbuzz(12,20))