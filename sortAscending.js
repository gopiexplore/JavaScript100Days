// Question : Sort an Array
// Write a function to sort an array of numbers in an ascending order 

const sortAscending=(arr)=>{
    return arr.sort((a,b)=>a-b);
}






console.log(sortAscending([5,2,10,8]));

// The function should take an array of numbers as input
// it should return a nuew array with the numbers sorted in ascending order 
// the original array should remain unchanged
// you are not allowed to use the build in sort() method