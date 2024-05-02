//Convert Object to Array and Vice Versa
const obj={
    name:"Gopi",
    age :23,
    city:'Hyderabad',

};
//convertion of objects into array
let entries=Object.entries(obj);
console.log(entries);
console.log(entries.flat());
//conversion of array to obj
let newObj=Object.fromEntries(entries)
console.log(newObj);