
const numberRange=(a,b)=>{
    let arr=[];
    while(a<=b){
        arr.push(a);
        a++;
    }
    return arr;
}




console.log(numberRange(0,5));//output:[0,1,2,3,4,5]
console.log(numberRange(3,7));//output:[3,4,5,6,7]
console.log(numberRange(-2,2));//output:[-2,-1,0,1,2]