//Write a function to calculate the sum of squares of all elements in an array 
// for example given the array[1,2,3], the function should return 14 because 1*1+2*2+3*3=1+4+9=14

const sumOfSquares=(arr)=>{
    // return arr.reduce((accum,curElem)=>accum=accum+(curElem*curElem),0)
    //second method
    let sum =0;
    for(let elem of arr){
        sum=sum+elem*elem;
    }
    return sum;
}



console.log(sumOfSquares([1,2,3]));