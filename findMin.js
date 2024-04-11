//Wrtie a function findMin that takes an array of numbers as input and returns the minimum value found in the array

const findMin=(arr)=>{
    // arr=arr.sort((a,b)=>{
    //     if(b>a){
    //         return -1;
    //     }
    // } );
    // return arr[0];
    //second method
    return Math.min(...arr);
}



console.log(findMin([5,10,2,8]));//output:2
console.log(findMin([5,-3,0,12,-7]));//output:-7
console.log(findMin([]))//ouptut udefined