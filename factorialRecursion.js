//Write a function to calculate the factorial of a number using Recursion

const factorialRecursion=(num)=>{
    if(num===1){
        return 1;
    }else{
        return num*factorialRecursion(num-1);
    }

}

console.log(factorialRecursion(5))