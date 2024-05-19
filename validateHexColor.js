const validateHexColor=(hexColor)=>{
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hexColor)

}
console.log(validateHexColor("#a3c113"))//output:true
console.log(validateHexColor("#fff"))//output:true
console.log(validateHexColor("#1234567"))//output:false
console.log(validateHexColor("a3c113"))//output:false
