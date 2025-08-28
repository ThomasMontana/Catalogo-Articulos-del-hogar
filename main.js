const loadMoreBtn = document.getElementById("loadMore");
const hiddenProducts = document.querySelectorAll(".producto.hidden");
let currentIndex = 0;
const step = 4; // cuántos productos mostrar por click

loadMoreBtn.addEventListener("click", () => {
    for (let i = currentIndex; i < currentIndex + step; i++) {
        if (hiddenProducts[i]) {
            hiddenProducts[i].classList.remove("hidden");
        }
    }
    currentIndex += step;

    // Si ya no hay más, ocultar botón
    if (currentIndex >= hiddenProducts.length) {
        loadMoreBtn.style.display = "none";
    }
});


const nav = document.querySelector('.breadcrumb-nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.sidebar');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active',window.scrollY >0)

    })

    menu_btn.addEventListener('click',() => {
        menu.classList.toggle('active')
    })