// Write a function arrays are Equal that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal 
// contains the same elements in the same order and false otherwise

const arraysAreEqual=(arr1,arr2)=>{
    if(arr1.lenght!==arr2.lenght){
        return false;
    }
    
    return arr1.every((curVa,index)=>curVa===arr2[index])
}

console.log(arraysAreEqual([1,2,3],[1,2,3]));//output:true

console.log(arraysAreEqual([1,2,3],[1,2,4]));//output:false
console.log(arraysAreEqual([],[]));//output:true
