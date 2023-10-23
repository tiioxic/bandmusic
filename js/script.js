const burger = document.querySelector("#navIcon");
const nav = document.querySelector("#menuOpen");
const body = document.querySelector("main")
// on écoute l'icone burger puis apres un click on bascule la class dispNone
burger.addEventListener("click", () => {
    // nav.adclassList.toggle("active");
    nav.classList.toggle("dispNone");
});
nav.addEventListener("click", () => {  
    nav.classList.toggle("dispNone");
});
body.addEventListener("click", () => {  
    nav.classList.add("dispNone");
});