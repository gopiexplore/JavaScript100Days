
//    Write a function findLongestWord that takes a string as input and returns the longest word in the string .
//    If there are multiple longest words, return the first one encountered.
//    Constraints
//    The input string may contain alphabetic characters digits,spaces and puncuation.
//    The input string is non-empty.
//    The input string may contain multiple words separated by spaces.
//    Note:
//    If the input string is empty or contains only white space the function should return and false.
//    The function should ignore leading and trailing whitespace when determinig the longest word.
const findLongestWord=(str)=>{
    if(str.trim().length===0){
        return false;
    }
    // words=str.split();
    // words=str.split('');
    words=str.split(" ");
    // console.log(words);
    // words=words.sort((a,b)=>b.length - a.length);
    // // words=words.sort((a,b)=>a.length - b.length);
    // // console.log(words);
    // return words.at(0);
    return words.reduce(
        (accum,curWord)=>(curWord.length>accum.length?curWord:accum),"");
}




   console.log(
    findLongestWord("Watch Thapa Technical javascript course on youtube")
   );