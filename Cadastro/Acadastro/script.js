const showMenu = document.querySelector('#menu-popup')
const closeMenu = document.querySelector('#menu-close')
const labelCpf = document.querySelector('.label-cpf')
const cpfId = document.querySelector('#cpf-id')
const barraLateral = document. querySelector('.barra-lateral')
const verificado = document.querySelector('#verific')
const errorDetect = document.querySelector('#error-detect')
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
cpfId.addEventListener("click", ()=>{
    labelCpf.classList.replace('label-cpf','span-cpf__islater')
})
labelCpf.addEventListener("click", ()=>{
    labelCpf.classList.replace('label-cpf','span-cpf__islater')
})
cpfId.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
    labelCpf.classList.replace('span-cpf__islater','label-cpf')
    verificado.style.display = 'none';
    errorDetect.style.display = 'none';
    cpfId.classList.remove('error-cpf')
    } else {
        labelCpf.classList.replace('label-cpf','span-cpf__islater')
    }
})
cpfId.addEventListener("input", (e) => {
    let value = e.currentTarget.value;
    value = value
    .replace(/(\d{3})(\d)/, "$1.$2")
    // .replace(/^(\d{3})+(\d{3})+(\d{3})+(\d{2})/, "$1.$2.$3-$4")
    e.currentTarget.value = value;
    if (value.length == 14) {
                let cpf = cpfId.value.replace(/[.]/g, "");
                const resultadoValidacao = validaCPF(cpf);
                
                if (resultadoValidacao == true) {
                    verificado.style.display = 'block';
                    errorDetect.style.display = 'none';
                } else {
                    errorDetect.style.display = 'block';
                    verificado.style.display = 'none';
                    cpfId.classList.add('error-cpf')
                }
    } else {
        verificado.style.display = 'none';
        errorDetect.style.display = 'none';
        cpfId.classList.remove('error-cpf')
    } 
})
cpfId.addEventListener("keypress", (e) => {
    let char = String.fromCharCode(e.keyCode);
    const validation = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let valor = e.target.value;
    if (char in validation) {
        return valor;
    } else {
        e.preventDefault();
    }
});
let entr = document.querySelector(".form-control").value
entr.addEventListener('keypress', function(e){
    if (!checkInput(e)){
        e.preventDefault();
    }
});

function checkInput(e){
    const char = String.fromCharCode(e.keyCode);
    console.log(char)
    const pattern= '[0-9]';
    if (char.match(pattern)){
        return true;
    }

};


function validaCPF(cpf) {

    let noveNumeros = cpf.substring(0, 9)
    let ultimosdigitos = cpf.substring(9)
    let soma = 0;
    for (let i = 10; i > 1; i--){
        soma += noveNumeros.charAt(10 - i) * i;
    };
    let resultados = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultados != ultimosdigitos.charAt(0)) {
        return false;
    } 
    if (cpf.length != 11) {

        return false;
    }
    soma = 0;

    noveNumeros = cpf.substring(0, 10);
    for (let k = 11; k > 1; k--) {
        soma += noveNumeros.charAt(11 - k) * k;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != ultimosdigitos.charAt(1)) {
        return false;
    }
    return true;
    
}