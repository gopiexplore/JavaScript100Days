// Write a function that takes a number as input and returns the sum of its digits


const sumOfDigits=(num)=>{
    let arr=Array.from(String(num),Number);
    return arr.reduce((accum,curElem)=>accum+=curElem,0);
}

console.log(sumOfDigits(1234));//output:10
console.log(sumOfDigits(4321));//output:10
console.log(sumOfDigits(123456))//output:21
