// Create a function validatePassword that checks if a given password string meets the following criteria:

// min 8 char 1 upper 1 lower number special char lenght 8 
function validatePassword(password){
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/.test(password);
}
console.log(validatePassword("Gopi123!"));
console.log(validatePassword("password"));
console.log(validatePassword("12345678"));
console.log(validatePassword("P@ssw0rd"));