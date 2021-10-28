//Dark Mode
const darkMode = document.querySelector("#enableDarkMode");
darkMode.addEventListener("click", () => 
{ document.body.classList.toggle("nightMode");});

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
/*let uno = document.getElementById("uno");
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
}*/


const puno = document.querySelector("#uno");
    puno.addEventListener("click", () => {
    const ppuno = document.querySelector("#tre");
    ppuno.classList.toggle("uno");
    const pppuno = document.querySelector("#uno");
    pppuno.classList.toggle("uno");
});

const pdue = document.querySelector("#due");
    pdue.addEventListener("click", () => {
    const ppdue = document.querySelector("#due");
    ppdue.classList.toggle("due");
    const pppuno = document.querySelector("#quattro");
    pppuno.classList.toggle("due");
});

const ptre = document.querySelector("#tre");
    ptre.addEventListener("click", () => {
    const pptre = document.querySelector("#tre");
    pptre.classList.toggle("tre");
    const ppptre = document.querySelector("#cinque");
    ppptre.classList.toggle("tre");
});

const pquattro = document.querySelector("#quattro");
    pquattro.addEventListener("click", () => {
    const ppquattro = document.querySelector("#quattro");
    ppquattro.classList.toggle("quattro");
    const pppquattro = document.querySelector("#uno");
    pppquattro.classList.toggle("quattro");
});

const pcinque = document.querySelector("#cinque");
    pcinque.addEventListener("click", () => {
    const ppcinque = document.querySelector("#cinque");
    ppcinque.classList.toggle("cinque");
    const pppcinque = document.querySelector("#due");
    pppcinque.classList.toggle("cinque");
});