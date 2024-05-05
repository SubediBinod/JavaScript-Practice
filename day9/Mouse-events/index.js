// eventListener:: Listen for specific events to create interactive 
// web pages events: click ,mouseover ,mouseout

// .addEventListener(event,callback)

const myBox=document.getElementById("overview")

// myBox.addEventListener("click",changeColor)

// function changeColor(event) {
//     event.target.style.backgroundColor="tomato"
//     event.target.textContent = " I'm so sad 😢!!!"
// }


//or 

myBox.addEventListener("click",event=>{
    event.target.style.backgroundColor="tomato"
    event.target.textContent = " Yes you 😉!!!"
})


myBox.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="Darkcyan";
    event.target.textContent = "hey you 😙"
});



myBox.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="cyan    ";
    event.target.textContent = "😒"
});
