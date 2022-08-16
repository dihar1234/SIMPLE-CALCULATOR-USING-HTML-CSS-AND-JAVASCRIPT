let result=document.getElementById("calc");
//this means whatever you will press , it will go to the input box
let calculate= (number)=>{
    result.value=result.value+number;
    //when you click on any number that should be incremented with the actual
    //result found in the input box 
}
let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(error){
        alert("Invalid input , Try again!")
    }
}
function clr(){
    result.value='';
}
function del(){
    result.value= result.value.slice(0,-1);
}
function doublezero(){
    result.value=result.value+"00";
}