const hexvalues=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const button=document.querySelector("button");
const body=document.querySelector("body");
const value=document.querySelector("#hexvalue");

button.addEventListener("click",hexadecimal);

function hexadecimal(){
    let hex="#";

    for(i=0;i<6;i++){
        var randomNo=Math.floor(Math.random()*hexvalues.length);
        hex+=hexvalues[randomNo];
    }
    value.textContent=hex;
    body.style.backgroundColor=hex;
    
    
}