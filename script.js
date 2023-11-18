const menu = document.getElementById("menu");
const scrollLimite = 100;

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollLimite) {
        menu.classList.add("shrink");
    } else {
        menu.classList.remove("shrink");
    }
})