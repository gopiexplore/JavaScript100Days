// Mobile Number Validation mobile number start with 6,7,8.9


const validateIndianMobileNumber=(phoneNum)=>{
    return /^[6-9][\d]{9}$/.test(phoneNum);
}

console.log(validateIndianMobileNumber("7386870714"))//output:true
console.log(validateIndianMobileNumber("0123456789"))//output:false
console.log(validateIndianMobileNumber("7386870"))//output:false
console.log(validateIndianMobileNumber("738687071423"))//output:false