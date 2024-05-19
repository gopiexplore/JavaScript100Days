const emailValid=(email)=>{
return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email);
}
console.log(emailValid("gopithammisetti6@gmail.com"));
console.log(emailValid("ksfas;dlfj.....#afdf.com"))