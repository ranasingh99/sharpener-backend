const user = {
    name :"Rana",
    age:25,
    Designation:"Software Engineer"
}
// Trivial way of accessing 

console.log(user.name);


// destructing way of acessing
const {name,age,Designation} = user;

console.log(name);