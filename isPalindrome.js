// Write a function to determaine weather a given string is a 
// palindrome or Notification. A palindrome is a word , phrase,
// number, or other sequence of characters that reads the same 
// forward and backward , ignoring spaces , puctuation, and 
// capitalization.

const isPalindrome=(str)=>{
    str=str.toLowerCase().replace(/\W/g,"");
    let r_str=str.split("").reverse().join("");
    // console.log(r_str);
    return str===r_str? true:false;

}





console.log(isPalindrome("A man, a plan, a canal, Panama"));//output:ture
console.log(isPalindrome("racecar"));//output:true
console.log(isPalindrome("hello"));//output:false


// Constraints:
// The input string may contain letters digits spaces, punction, and special characters.Constraints
// The function should be case insensitive meaning Racecar and racecar should be considered the same 
// ignoter spaces punctuation and special characters when determining if a string is a palindrome 
// the function should return true if the input string is a palindrome and false otherwise