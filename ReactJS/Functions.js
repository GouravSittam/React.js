//simple functions for React JS
function hello(){
    console.log("Hello World");
}
hello();

//functions with loop parameters
// function printNum(n){
//     for(let i=0;i<n;i++);
//     console.log(i);
// }
// printNum(8);

//functions with multi parameters
function add(a,b){
    let sum=a+b;
    console.log("The Sum is "+sum);
}
add(4,5);


//function with return values and arguments
function square(number){
    return number*number;
}
const result = square(10);
console.log(`Result: ${result}`);