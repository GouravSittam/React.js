//global declararion
var globalvar = "i am global";
console.log(globalvar);

//local declaration
function abc(){
   var localvar = "i am local";
   console.log(localvar)
}
abc();
//console.log(localvar);
//redeclaration in var
function a(){
    var q=45;
    var q=3;
    console.log(q)
    //in var redeclaration  is allowed

}
a()

//reassignment in Var
function b(){
    var p = 45;
    p = 3;
    console.log(p);
    //reassignment is allowed  in var

 }
b();

//let 
//scope declaration
let globalLet="it is global";
console.log(globalLet);
//local declaration in let scope
function abc(){
    let localLet = "i am local";
    console.log(localLet)
}
abc();

//redeclaration by let
function redecByLet(){
    let z=30;
    //let z=3; //redeclaration is not allowed in let scope
    console.log(a);

}
redecByLet();

//reassignment by let

function reassignByLet(){
    let xx = 300;
    xx = 30;
    //reassignment is not allowed in let scope

 }
 reassignByLet();

 //hoisting by let
 function hoistBy(){
    console.log("before dec: ",aa);
    let aa=33;
    console.log("after decl:",aa);//hoisting is not allowed in let scope
 }
 hoistBy();

 