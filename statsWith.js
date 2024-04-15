//Write a function to check if a given string starts with a specific substring.


const startsWith=(str,substr)=>{
    //return str.toLowerCase().startsWith(substr.toLowerCase());

    return str.toLowerCase().slice(0,substr.length)===substr.toLowerCase();
}



console.log(startsWith("Hello World","hello"));//output:true
console.log(startsWith("Hello world","World"));//output:false
