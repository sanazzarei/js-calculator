function addtoCAL(value){
    document.getElementById("p-value").textContent += value;
}
function EQUAL(){
    document.getElementById("output-value").textContent= eval(document.getElementById("p-value").textContent )
}
function reset(){
    document.getElementById("p-value").textContent=" ";
    document.getElementById("output-value").textContent="0"
}
function DEL(){
    var num=document.getElementById("p-value").textContent;
    digits= num.toString().slice(0,-1);
    document.getElementById("p-value").textContent=digits;
}