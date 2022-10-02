const showMenu = document.querySelector('#menu-popup')
const closeMenu = document.querySelector('#menu-close')
const barraLateral = document. querySelector('.barra-lateral')
showMenu.addEventListener('click', ()=>{
    showMenu.style.display = "none"
    barraLateral.classList.remove("closedMenu")
    barraLateral.classList.add("menu-show")
})
closeMenu.addEventListener('click', ()=>{
    barraLateral.classList.remove("menu-show")
    barraLateral.classList.add("closedMenu")
    setTimeout(() => {
        showMenu.style.display = "block"
    }, 250);
})