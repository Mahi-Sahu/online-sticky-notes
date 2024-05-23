let container2=document.querySelector(".container2");
let container3=document.querySelector(".container3");
let iconTick=document.getElementById("icon-tick");
let iconCross=document.getElementById("icon-cross");
let container1=document.getElementsByClassName("create-btn")[0];
let i=0;

iconCross.addEventListener("click",()=>{
    container3.style.display="none";
});
iconTick.addEventListener("click",()=>{
    let noteText= document.getElementById("note-text").value;
    let node0=document.createElement("div");
    let node1=document.createElement("div");

    node1.innerHTML=noteText;
    node1.setAttribute("style", "width: 250px;height: 250px; font-size: 26px; padding: 25px; margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)");

    node1.style.margin=margin();
    node1.style.transform=rotate();
    node1.style.background=colour();
    node1.style.position="";
    node0.appendChild(node1);
    container2.insertAdjacentElement("beforeend",node0);
    node0.addEventListener("mouseenter",()=>{
        node0.style.transform="scale(1.1)";
    });
    node0.addEventListener("mouseleave",()=>{
        node0.style.transform="scale(1)";
    });
    container3.style.display="none";

});
container1.addEventListener("click",()=>{
    if(container3.style.display=="none"){
        container3.style.display="block";
    }
    else{
        container3.style.display="none";
    }
    /*container3.style.position="relative";*/
});
const margin=()=>{
    const random_margin=["-5px","1px","5px","10px","15px","20px"];
    return random_margin[Math.floor(Math.random()*random_margin.length)];
};
const rotate=()=>{
    const random_rotate=["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];
    return random_rotate[Math.floor(Math.random()*random_rotate.length)]
};

const colour=()=>{
    const random_colour=["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
    if(i>random_colour.length-1){
        i=0;
    }
    return random_colour[i++];
}