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