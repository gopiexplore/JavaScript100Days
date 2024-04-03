// Challenge :Factorial Finder
// Write a function factorial that takes a non negative 
// integer num as input and returns its factorial the 
// factorial of a non negative integer n denoted as n! is the product of all positive integers less than or equla to n 
// the factorial of 0 is defined as 1
// factorial(0)=>1

const factorial=(num)=>{
    let fact=1;
   for(let i=1;i<=num;i++){
    fact*=i;
   } 
   return fact;
}


console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));