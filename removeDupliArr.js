//Remove duplicates from array

const removeDuplicates=(arr)=>{
    return [...new Set(arr)];

}

console.log(removeDuplicates([1,2,3,3,4,4,5]))//output[1,2,3,4,5]
console.log(removeDuplicates(["a","b","c","b","a"]));//output[a,b,c]