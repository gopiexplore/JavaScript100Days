//Calculate Age
const calculateAge=(birthDate)=>{
    let todayDate=new Date();
    birthDate=new Date(birthDate);
    let age=todayDate.getFullYear()-birthDate.getFullYear();
    const monthDiff=todayDate.getMonth()-birthDate.getMonth();
    if(monthDiff<0 || monthDiff===0 && todayDate.getDate()<birthDate.getDate()){
        age--;

    }
    return age;
}
console.log(calculateAge("1990-05-15"));//output: