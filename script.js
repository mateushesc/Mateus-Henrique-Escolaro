
document.querySelectorAll("nav ul a").forEach(link =>{
    link.addEventListener('click', evento =>{
        evento.preventDefault();
        const href = link.getAttribute("href");
        const alvo = document.querySelector(href);
        if(alvo){
            alvo.scrollIntoView({behavior: "smooth"});
        }
    });
});


const menu = document.getElementById("menu");
const scrollLimite = 100;

window.addEventListener("scroll", () =>{
    if(window.scrollY > scrollLimite){
        menu.classList.add("shrink");
    }else{
        menu.classList.remove("shrink");
    }
})