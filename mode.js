
const findMode=(arr)=>{
    let counts={};
    let mode;
    let max=0;
    for(let element of arr){
        counts[element]=(counts[element]||0)+1
        if(counts[element]>max){
            max=counts[element];
            mode=element;

        }
    }
    // console.log(counts);
    return mode;
}


console.log(findMode([1,2,2,3,1,4,2]));