// Prepare the Number 
// Start with the digits of the number . for example if validating the number 79927398713
// Reverse the digits:
// Reverse the digits of the number for example it become 31789379297
// Double Every second digit
// Start from the first digit double every second digit. 
// for our example 3,1*2,7,8*2,9,3*2,7,9*2,2,7*2,9,
// which translates to :3,2,7,16,9,6,7,18,2,14,9.
// subtract 9 from numbers highter than 9.
// if doubling the number results in a number greater than 9, subtract 9 from it 
// now our series is 3,2,7,7,9,6,7,9,2,5,9.
// sum all digits 
// add all the digits together 
// 3+2+7+7+9+6+7+9+2+5+9=66
// check modulo 10;
// if the sum modulo 10 is 0, then the number is valid accourding to the luhn formula
// 66%10=6, which is not 0, so 79927398713 is not a valid number accorgint to luhn 
// e
const validateCreditCard=(str)=>{
    // intital step
    str=str.replace(/\D/g,"");
    // step 1 reverse the digits
    let revNum="";
        for(let i=str.length-1;i>=0;i--){
            revNum=revNum+str[i];   
    }
   //console.log(revNum);
//    step2:Double every second degit
let doubleNum=revNum.split("").map((curDigit,index)=>{
    if(index%2!=0){
        curDigit=curDigit*2;
        if(curDigit>9){
            curDigit=curDigit-9;
        }else{
            curDigit=curDigit;

        }
    }
    return curDigit;
}).reduce((accum,curElem)=>accum+Number(curElem),0)
return doubleNum%10===0;
//console.log(doubleNum);

}

console.log(validateCreditCard("4539 1488 0343 6467"));
console.log(validateCreditCard("8273 1232 7352 0569"));