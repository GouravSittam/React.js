//Arrow Function?
console.log("Hello World");

//Arrow function with no input argument
const greet =()=>{
    console.log("Hello world!");
}
greet();

//Arrow function with single input argument
const s=x=>x*x;
console.log(s(2));

//Arrow function Single line function body
const avi=(a,v)=>a+v;
console.log(avi(1,8));

//Arrow function with single expression broken with multiple lines
const mssg=(name,age)=>{
    `Hello, ${name} you are ${age} year old`;
}
console.log(mssg('alice', '20'));


//object liters return value
const createPerson = ({name, age}) => ({
    name: name,
    age: age
});

const person = createPerson({name: "rahul", age: 25});
console.log(person);

//return key
// return{
//     name:name,
//     age:age
// }