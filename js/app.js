//Dark Mode
const darkMode = document.querySelector("#enableDarkMode");
darkMode.addEventListener("click", () => { document.body.classList.toggle("nightMode");});

//Illuminazione Hobby
const lighMode = document.querySelector("#luce");
lighMode.addEventListener("click", () => { 
    const dayMode = document.querySelector(".hobby");
    dayMode.classList.toggle("illumi");
});

//Conta i paragrafi
window.addEventListener( "click", () => {
let paragrafi = document.getElementsByTagName("p");
console.log(paragrafi)
},
{once: true}
)

//Test
let uno = document.getElementById("uno");
let due = document.getElementById("due");
let tre = document.getElementById("tre");
let quattro = document.getElementById("quattro");
let cinque = document.getElementById("cinque");

uno.onclick = function(){
    uno.style.backgroundColor = "red";
    tre.style.backgroundColor = "red";
}

due.onclick = function(){
    due.style.backgroundColor = "red";
    quattro.style.backgroundColor = "red";
}

tre.onclick = function(){
    tre.style.backgroundColor = "red";
    cinque.style.backgroundColor = "red";
}
quattro.onclick = function(){
    quattro.style.backgroundColor = "red";
    uno.style.backgroundColor = "red";
}
cinque.onclick = function(){
    cinque.style.backgroundColor = "red";
    due.style.backgroundColor = "red";
}