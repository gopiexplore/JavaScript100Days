// Interview Question
// Write a function called checkTrianlgeType that takes three parameters representing the lenghts of the sides of a triangle the function should return a string indicating the type of triangle "equilateral","isosceles",or'scalar'.charAt


const checkTriangleType=(a,b,c)=>{
    if(a===b && b===c){
        return "equilateral"
    }
    if(a===b || b===c || a===c) return "isosceles";
    return "scalene"
}


console.log(checkTriangleType(3,3,3));// output:"equilateral"
console.log(checkTriangleType(3,4,3));// output:"isosceles"
console.log(checkTriangleType(5,8,6));// output:"scalene"
//todo The function should adhere to the follwing rules;
//If all three sides are of equal length,return 'equilateral'
//If all two sides are of equal length,return 'isosceles'
//If all three sides are of different length,return 'scalene'
