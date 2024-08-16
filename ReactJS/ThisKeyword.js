// "use strict";
//globally scoped to a module or file scope
//window object in browser
console.log(this)

//This key within the function
// function a(){
//     console.log(this)
// }
// a();

// //in strict mode this keyword will be undefined
// //non delete keyword,read only
// a();
// window.a();


const obj={
    y:5,
    x:function(){// x is method when creating a function inside a object
        console.log(this)
    },
};
obj.x();

const sutd={
    name:"abhinash",
    printName:function(){
        console.log(this);
    },
};
sutd.printName();

const stud2={
    name:"avinash",
};
sutd.printName.call(stud2)
sutd.printName.apply(stud2)

//bind to create new function with this set for student 2
const printNameForStud2=sutd.printName.bind(stud2);// bind is a method of the function object,which creates a new function and sets its this value as specified by the arguments passed in to it when called.   
