const fruits = ['Apple','orange','','mango','','lemon'];

// const myNums = [1,2,3,4,5,6,7,,8,9,10];

// const newNums = myNums.filter((num)=>num>4);

// console.log(newNums);
 

const newFruits = fruits.map((fruit)=>{
    if(fruit === ''){
        return ('empty string'+fruit);
    }else return fruit;
})

// note when we use curly braces then it becomes necesssary to use the return 
// ketword inside the scope;

console.log(newFruits);