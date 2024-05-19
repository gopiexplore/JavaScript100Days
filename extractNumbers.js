//Extract Numbers from a string

const extractNumbers=(str)=>{
    let regex=/\d+/g;
    return str.match(regex);

}
console.log(extractNumbers("abc1234def456"));//output ['123','456']
console.log(extractNumbers("no numbers here"))//null
console.log(extractNumbers("1a2b3c4d"))