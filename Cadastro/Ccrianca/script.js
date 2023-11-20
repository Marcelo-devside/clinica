const showMenu = document.querySelector('#menu-popup')
const closeMenu = document.querySelector('#menu-close')
const barraLateral = document. querySelector('.barra-lateral')
showMenu.addEventListener('click', ()=>{
    setTimeout(() => {
        showMenu.style.display = "none"
    }, 60);
    barraLateral.classList.remove("closedMenu")
    barraLateral.classList.add("menu-show")
})
closeMenu.addEventListener('click', ()=>{
    barraLateral.classList.remove("menu-show")
    barraLateral.classList.add("closedMenu")
    setTimeout(() => {
        showMenu.style.display = "block"
    }, 200);
})
// _________________________________________________________________________________________

window.addEventListener('scroll', ()=> {
       const alturaPage2 = window.scrollY 
    console.log(alturaPage2)
     if (alturaPage2 > 1 &&  showMenu.style.display == "none"){
        barraLateral.classList.add("closedMenu")
        showMenu.style.display = "initial"
    } 
})