//Dark Mode
const darkMode = document.querySelector("#enableDarkMode");
darkMode.addEventListener("click", () => { document.body.classList.toggle("nightMode");});

//Illuminazione Hobby
const lighMode = document.querySelector("#luce");
lighMode.addEventListener("click", () => { 
    const dayMode = document.querySelector(".hobby");
    dayMode.classList.toggle("illumi");
});
