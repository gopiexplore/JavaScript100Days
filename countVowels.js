//Write a function that takes a string as input and returns the count of vowels in that string 
// Consider a,ei,o,u as vowels both uppercase and lowercase

const countVowels=(str)=>{
    let vowels=['a','e','i','o','u'];
    let arr=str.split('');
    let count=0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase()))
        count++;
    }
    return count;

}







console.log(countVowels("Hello world"));//output:3
console.log(countVowels("ThE quIck brOwn Fox"));//output:5
console.log(countVowels("Brrrp"))//output:0