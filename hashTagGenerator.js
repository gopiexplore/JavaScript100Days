// Programming Question :Hash Tag Geneartor
// You are required to implement a function generateHash that generates a hash tag from a given input string 
// The hash tag should be constructed as follows:
// The input string should be converted to a hash tag FormData, where each word is capitalized and concatenated together without spaces.FormData
// if the lengthe of the input string is greater than 280 characters or if the input string is empty or contains only whitespace the function should return false
// otherwise the function should return the generated hash tag prefixed with #.FormData
// Write a function generateHash to accomplish this task 

const generateHash=(str)=>{
    if(str.length>280 || str.trim().length===0){
        return false;
    }
    str=str.split(" ");
    // console.log(str[1].toUpperCase());
    // str=str.map((curElem)=>console.log(curElem[0]));
    str=str.map((curElem)=>
    // curElem.replace(curElem[0],curElem[0].toUpperCase()));
    // Next Method
    curElem.charAt(0).toUpperCase()+curElem.slice(1));
    // console.log(str)
    // str=str.join();
    // console.log(str);
    str=`#${str.join("")}`;
    // console.log(str);

    return str;
}


console.log(generateHash("my name is gopi thammisetti"));
// o/p "#MyNameIsGopiThammisetti"