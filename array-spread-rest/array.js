// SPREAD OPERATORS

// function sumoftwo(a,b){
//     return a+b;
// }

// let myNum = [20,25];

// console.log(sumoftwo(...myNum));

/* so spread opeartors taken into account when we do not wish to change the function 
 defination of our function ...so in the above example the function is expexting the 
 individul value but we are passing it the array object , so in this situation the 

 rest operators comes into the picture
 SPREAD OPeartors : Basically rest opeartors takes group and spread it into individual 
 value.
 */

 // REST OPearatos : when we are not sure about the number of argumets that can be 
 // passed that time we use rest operatos; for example;


function sumOfNumber(...args){
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(sumOfNumber(3,4));
// here args is variable and it combines all arguments value and bind it in array;