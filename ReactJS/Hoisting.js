//Hoisting

function h(){
    console.log("Befor declaration: ",v); //undefined because v is not hoisted yet, it will be hoisted when the function execution starts.
    var v=45;
    console.log("After declration: ",v)
}
h();