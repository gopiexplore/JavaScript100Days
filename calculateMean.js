//Write a function called calculateMean that takes an array of numbers as input and returns the mean of those numbers

const calculateMean=(arr)=>{
    if(arr.length===0){
        return 0;
    }
    let sum=arr.reduce((accum,curElem)=>accum+curElem,0);
    return(sum/arr.length);
}




console.log(calculateMean([1,2,3,4,5]))//output:3
console.log(calculateMean([10,20,30]))//outupt:20
console.log(calculateMean([-1,0,1]))//output:0
console.log(calculateMean([]));//output:0