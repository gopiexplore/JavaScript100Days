//Write a function called repeatString that takes two parameters:


const repeatString=(str,num)=>{
    return num>0? str.repeat(num):str;
}


console.log(repeatString("AbcD",5));