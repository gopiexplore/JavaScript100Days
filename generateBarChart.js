//Simple Bar Chart From Array Data
// const generateBarChart=(arr)=>{
//     const newArr=arr.map((currElem,index)=>{
//         let star="";
//         let number=0;
//         while(number<currElem){
//             star=star+"*";
//             number++;
//         }
//         return `${index+1}:${star}`;
//     });
//     return newArr.join("\n");
// }

// second type

const generateBarChart=(arr)=>{
    return arr.map((curElem,index)=>{
        return `${index+1}:${"*".repeat(curElem)}`;
    })
    .join("\n");
}

console.log(generateBarChart([5,3,9,2]));