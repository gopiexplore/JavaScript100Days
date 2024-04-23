//Write a function called truncateString That takes two parameters:


//str:a string that needs to be truncated
//maxlenght an integer representing the maximum length of the string allwed
//the function should truncate the input string str if its length exceeds the specified maxLength function should add ... to the end of the truncated string.

const truncateString=(str,num)=>{
    // if(num<=0){
    //     return str;
    // }
    // else if(str.length>num){
    //     return str.slice(0,num).concat("...");
    // }

    return num<=0?str:str.slice(0,num).concat("...")
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket",8));
