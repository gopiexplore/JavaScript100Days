//Write a function to reverse a string without using any built in methods or libraries the function should take a string as input and return the revesed string



const reverseString=(str)=>{
    let rev_str="";
    for(let i=str.length-1;i>=0;i--){
        rev_str=rev_str+str[i];
        

    }
    return rev_str;
}



console.log(reverseString("hello"))