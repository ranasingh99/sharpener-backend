// SPREAD OPERATORS

function sumoftwo(a,b){
    return a+b;
}

let myNum = [20,25];

console.log(sumoftwo(...myNum));

/* so rest opeartors taken into account when we do not wish to change the function 
 defination of our function ...so in the above example the function is expexting the 
 individul value but we are passing it the array object , so in this situation the 

 rest operators comes into the picture
 REST OPeartors : Basically rest opeartors takes group and spread it into individual 
 value.
 */