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