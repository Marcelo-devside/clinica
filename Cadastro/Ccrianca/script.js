const showMenu = document.querySelector('#menu-popup')
const closeMenu = document.querySelector('#menu-close')
const barraLateral = document. querySelector('.barra-lateral')
const bornDate = document. querySelector('.classgenerictwo')

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

// window.addEventListener('scroll', ()=> {
//        const alturaPage2 = window.scrollY 
//     console.log(alturaPage2)
//      if (alturaPage2 > 1 &&  showMenu.style.display == "none"){
//         barraLateral.classList.add("closedMenu")
//         showMenu.style.display = "initial"
//     } 
// })

bornDate.addEventListener("input", (e) => {
    e.currentTarget.maxLength = 10
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    .replace(/(\d{2})+(\d{2})+(\d{4})/g, "$1/$2/$3")
    e.currentTarget.value = value
    return e
})
window.addEventListener('scroll', ()=> {
    const alturaPage2 = window.scrollY 
 console.log(alturaPage2)
  if (alturaPage2 > 1 ){
    showMenu.style.display = "none"
  } else{
    showMenu.style.display = "block"
 } 
})