//Write a function called simplePasswordValidator that takes a single parameter

// const simplePasswordValidator=(password)=>{
//     let hasLowerCase=false;
//     let hasUpperCase=false;
//     let hasNumber=false;
//     for(let char of password){
//         if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
//             hasUpperCase=true;
//         }else if(char.charCodeAt(0)>=97 && char.charCodeAt<=122){
//             hasLowerCase=true;
//         }else if(!isNaN(Number(char))){
//             hasNumber=true;
//         }

//     }
//     if(!hasLowerCase || !hasUpperCase || !hasNumber || password.length<8){
//         return false;
//     }
//     return true;
// }
function simplePasswordValidator(password){
    let usercheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return usercheck.test(password)
}



console.log(simplePasswordValidator("afkdsfadsf"))//output:false
console.log(simplePasswordValidator("afkdsfadsf1"))//output:false
console.log(simplePasswordValidator("afkdsfadsf1A"))//output:true
console.log(simplePasswordValidator("afkdsfadsf1Aa"))//output:true
