// challenge Calculate the average
// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers
// your function should
// Accept an array of numbers as input
// calculate the sum of all the numbers in the array 
// divide the sum by the total number of elements i the array to find the average
// return the calulate average

const calculateAverage=(arr)=>{
    let total=arr.reduce((accum,curElem)=>accum+curElem,
    0)
    return total/arr.length;
}


console.log(calculateAverage([5,10,2,8]))//output:6
