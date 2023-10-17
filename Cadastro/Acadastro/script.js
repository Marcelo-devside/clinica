const showMenu = document.querySelector('#menu-popup')
const closeMenu = document.querySelector('#menu-close')
const labelCpf = document.querySelector('.label-cpf')
const labelBorn = document.querySelector('.label-born')
const bornDate = document.querySelector('.happyBirthday')
const labelUf = document.querySelector('.label_uf')
const labelMunicipio = document.querySelector('.label_municipio')
const labelResildencial = document.querySelector('.label_residencial')
const labelCelular = document.querySelector('.label_celular')
const labelPatient = document.querySelector('.label_patient')
const labelMother = document.querySelector('.label_mather')
const labelFather = document.querySelector('.label_father')
const resildencialInput = document.querySelector('.residencial_input')
const ufInput = document.querySelector('.uf_input')
const municipioInput = document.querySelector('.municipio_input')
const celularInput = document.querySelector('.celular_input')
const patientInput = document.querySelector('.patient_name')
const motherInput = document.querySelector('.mother')
const fatherInput = document.querySelector('.father')
const cpfId = document.querySelector('.cpf-id')
const barraLateral = document. querySelector('.barra-lateral')
const verificado = document.querySelector('#verific')
const errorDetect = document.querySelector('#error-detect')
const legendAge = document.querySelector('.legend_age')

//-------------------------------------------------------------------------
//Abrir e fechar menu
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
//---------------------------------------------------------------------
//
cpfId.addEventListener("keyup",()=>{
    if(cpfId.value.length == 14){
        labelBorn.classList.replace('label-born','genericLabelIsLater')
        bornDate.focus()
    }
})
resildencialInput.addEventListener("keyup",()=>{
    if(resildencialInput.value.length == 14){
        labelCelular.classList.replace('label_celular','genericLabelIsLater')
    celularInput.focus()
    }
    console.log("residencial tamanho:",resildencialInput.value.length);
})
celularInput.addEventListener("keyup",()=>{
    if(celularInput.value.length == 15){
        labelPatient.classList.replace('label_patient','genericLabelIsLater')
    patientInput.focus()
    }
})

cpfId.addEventListener("click", ()=>{
    labelCpf.classList.replace('label-cpf','genericLabelIsLater')
    labelCpf.innerHTML=`<label>DNV</label>`
})
labelCpf.addEventListener("click", ()=>{
    labelCpf.classList.replace('label-cpf','genericLabelIsLater')
    labelCpf.innerHTML=`<label>DNV</label>`
    cpfId.focus()
})
bornDate.addEventListener("click", ()=>{
    labelBorn.classList.replace('label-born','genericLabelIsLater')
})
labelBorn.addEventListener("click", ()=>{
    labelBorn.classList.replace('label-born','genericLabelIsLater')
    bornDate.focus()
})
labelUf.addEventListener("click", ()=>{
    labelUf.classList.replace('label_uf','genericLabelIsLater')
    ufInput.focus()
})
labelMunicipio.addEventListener("click", ()=>{
    labelMunicipio.classList.replace('label_municipio','genericLabelIsLater')
    municipioInput.focus()
})
municipioInput.addEventListener("click", ()=>{
    labelMunicipio.classList.replace('label_municipio','genericLabelIsLater')
})
resildencialInput.addEventListener("click", ()=>{
    labelResildencial.classList.replace('label_residencial','genericLabelIsLater')
})
labelResildencial.addEventListener("click", ()=>{
    labelResildencial.classList.replace('label_residencial','genericLabelIsLater')
    resildencialInput.focus()
})
celularInput.addEventListener("click", ()=>{
    labelCelular.classList.replace('label_celular','genericLabelIsLater')
})
labelCelular.addEventListener("click", ()=>{
    labelCelular.classList.replace('label_celular','genericLabelIsLater')
    celularInput.focus()
})
patientInput.addEventListener("click", ()=>{
    labelPatient.classList.replace('label_patient','genericLabelIsLater')
})
labelPatient.addEventListener("click", ()=>{
    labelPatient.classList.replace('label_patient','genericLabelIsLater')
    patientInput.focus()
})
motherInput.addEventListener("click", ()=>{
    labelMother.classList.replace('label_mather','genericLabelIsLater')
})
labelMother.addEventListener("click", ()=>{
    labelMother.classList.replace('label_mather','genericLabelIsLater')
    motherInput.focus()
})
fatherInput.addEventListener("click", ()=>{
    labelFather.classList.replace('label_father','genericLabelIsLater')
})
labelFather.addEventListener("click", ()=>{
    labelFather.classList.replace('label_father','genericLabelIsLater')
    fatherInput.focus()
})
//----------------------------------------------------------------------------------

cpfId.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
    labelCpf.classList.replace('genericLabelIsLater','label-cpf')
    labelCpf.innerHTML=`<label>DNV / CPF</label>`
    verificado.style.display = 'none';
    errorDetect.style.display = 'none';
    } else {
        labelCpf.classList.replace('label-cpf','genericLabelIsLater')
    }
})
bornDate.addEventListener("focus", (e)=>{
    legendAge.innerHTML = ``
})
bornDate.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelBorn.classList.replace('genericLabelIsLater','label-born')
    } else {
        labelBorn.classList.replace('label-born','genericLabelIsLater')
        Idade()
    }
})

function Idade(){
    let nascimento = document.querySelector('.happyBirthday').value
    let nascimentoFormat = nascimento.replace(/[/]/g, "");
    console.log("nascimentoFormat", nascimentoFormat)
    let ano_nascimento = nascimentoFormat.substring(4, 8)
    console.log("ano do nascimento", ano_nascimento)
    let mes_nascimento = nascimentoFormat.substring(2, 4)
    console.log("mês do nascimento", mes_nascimento)
    let dia_nascimento = nascimentoFormat.substring(0, 2)
    console.log("dia do nascimento", dia_nascimento)
    dataNasc = Date.parse(`${mes_nascimento} ${dia_nascimento} ${ano_nascimento}`)
    const today = new Date()
    console.log("today", today)
    const  birthdate = new Date(dataNasc)
    console.log("birthdate", birthdate)
    const ageinMiliseconds = today - birthdate 
    console.log("ageinMiliseconds", ageinMiliseconds)
    const ageinSeconds = ageinMiliseconds / 1000
    const ageinMinutes = ageinSeconds / 60
    const ageinHours = ageinMinutes / 60
    const ageinDays = ageinHours / 24
    const numberageinYears = Math.floor(ageinDays / 365.25)
    const numberageinMonths = Math.floor((ageinDays % 365.25) / 30.44)
    const numberageinDaysRemainder = Math.floor(ageinDays % 365.25 % 30.44)
    const ageinYears = numberageinYears
    console.log("ageinYears", ageinYears)
    const ageinMonths = numberageinMonths
    console.log("ageinMonths", ageinMonths)
    const ageinDaysRemainder = numberageinDaysRemainder
    console.log("ageinDaysRemainder", ageinDaysRemainder)
    console.log("ageinMonths", typeof(ageinMonths));
    if(ageinYears=== 0 && ageinMonths === 0 && ageinDaysRemainder === 0){
    legendAge.textContent = 'A criança Nasceu hoje!'
    } else if (ageinYears=== 0 && ageinDaysRemainder === 0){
            legendAge.innerHTML= `idade: ${ageinMonths} meses`
        }else if (ageinYears=== 0 && ageinMonths === 0){
            legendAge.innerHTML= `idade: ${ageinDaysRemainder} dias.`
        } else if (ageinMonths === 0 && ageinDaysRemainder === 0 || ageinMonths === 0){
            legendAge.innerHTML= `idade: ${ageinYears} anos`
        } else { 
            legendAge.innerHTML= `${ageinYears} anos`
        ageinYears < 1 ? legendAge.innerHTML= `idade: ${ageinMonths} meses e ${ageinDaysRemainder} dias.` : legendAge.textContent = `idade: ${ageinYears} anos, ${ageinMonths} meses`
        }
}
    // let today = new Date();
    // let hours = today.setHours(0)
    // let minutes = today.setMinutes(0)
    // let dia_atual = today.getDate() 
    // let mes_atual = today.getMonth() 
    // let ano_atual = today.getFullYear().toString() 
    // if(dia_atual.toString().length == 1){
    //     dia_atual = "0" + dia_atual
    //     console.log("dia atual", dia_atual)
    // }else {
    //     dia_atual = dia_atual.toString()
    //     console.log("dia atual", dia_atual)
    // }
    // mes_atual = mes_atual + 1 
    // if(mes_atual.toString().length == 1){
    //     mes_atual = "0" + mes_atual
    //     console.log("mes atual", mes_atual)
    // } else {
    //     mes_atual = mes_atual.toString()
    //     console.log("mes atual", mes_atual)
    // }
    // console.log("ano atual", ano_atual)
    // console.log("today", today)
    // console.log("hours", hours)
    // console.log("minutes", minutes)
    //  const data_atual = new Intl.DateTimeFormat(['bra', 'id']).format(today);
    // // const transfomrDate = data_atual.toString();
    // let data_atualFormat = data_atual.replace(/[/]/g, "");
    // let ano_atual = data_atualFormat.substring(3, 8)
    // console.log("ano atual", ano_atual)
    // let mes_atual = data_atualFormat.substring(1, 3)
    // console.log("mês atual", mes_atual)
    // let dia_atual = data_atualFormat.substring(0, 1)
    // console.log("dia atual", dia_atual)
    // let nascimento = document.querySelector('.happyBirthday').value
    // let nascimentoFormat = nascimento.replace(/[/]/g, "");
    // console.log("nascimentoFormat", nascimentoFormat)
    // let ano_nascimento = nascimentoFormat.substring(4, 8)
    // console.log("ano do nascimento", ano_nascimento)
    // let mes_nascimento = nascimentoFormat.substring(2, 4)
    // console.log("mês do nascimento", mes_nascimento)
    // let dia_nascimento = nascimentoFormat.substring(0, 2)
    // birthdate = `${ano_nascimento}.${mes_nascimento}.${dia_nascimento}`

    // function anoBissexto(ano_nascimento){
    //         if(ano_nascimento % 4  == 0 && ano_nascimento % 100 != 0 || ano_nascimento % 400 == 0){
    //             console.log("É bissexto!")
    //             return 1
    //         } else {
    //             console.log("Não é bissexto!")
    //             return 0
    //     }
    // }
    // anoBissexto(ano_nascimento)

    // function validaData(dia, mes, ano){
    //     if(dia == 29 && mes == 02 && anoBissexto(ano) == 0 ){
    //         return 0
    //     } else if(dia > 29 && mes == 02){
    //         return 0
    //     } else if(dia < 01 || dia > 31 || mes < 01 || mes > 12){
    //         return 0
    //     } else if(dia == 31 && (mes == 04 || mes == 06 || mes == 09 || mes == 11)){
    //         return 0
    //     } else if( ano.length != 4){
    //         return 0
    //     } else {
    //         return 1
    //     }
    // }
    // validaData(dia_nascimento, mes_nascimento, ano_nascimento)

    // function diasDoMes(m, a){
    //         const mes1 = ["01", "03", "05", "07", "08", "10", "12"]
    //         const mes2 = ["04", "06", "09", "11"]
    //         if (mes1.includes(m)){
    //             console.log("Mês tem 31 dias")
    //             return "31"
    //         } else if(mes2.includes(m)){
    //             console.log("Mês tem 30 dias")
    //             return "30"
    //         } else if(m == 02 && anoBissexto(a) == 1){
    //             console.log("Mês tem 29 dias")
    //             return "29"
    //         } else {
    //             console.log("Mês tem 28 dias")
    //             return "28"
    //         }
    //     }
    // diasDoMes(mes_nascimento, ano_nascimento)
    //     function calculandoIdade(dia_nascimento, mes_nascimento, ano_nascimento, dia_atual, mes_atual, ano_atual){
    //         let qtdDias = 0
    //         let qtdMes = 0
    //         let qtdAno = Math.abs(ano_nascimento - ano_atual)
            // while(mes_nascimento < mes_atual  || ano_nascimento < ano_atual){
            //     mes_nascimento++
            //     qtdMes++
            //     if(qtdMes == 12){
            //         // qtdAno  
            //         qtdMes = qtdMes - 1
            //         legendAge.innerHTML = `${qtdAno} anos, ${qtdMes} meses e ${qtdDias} dias`
            //     }
            //     if(mes_nascimento == "12"){
            //         ano_nascimento++ 
            //         mes_nascimento = 0 
            //         legendAge.innerHTML = `${qtdAno} anos, ${qtdMes} meses e ${qtdDias} dias`
            //     }
            // }
            // if(mes_nascimento == mes_atual && dia_nascimento == dia_atual && ano_nascimento == ano_atual - 1){
            //     qtdMes = 0
            //     qtdDias = 0
            //     legendAge.innerHTML = `${qtdAno + 1} ano`
            // } else {
            //     legendAge.innerHTML = `${qtdAno + 1} anos`
            // }
            // if(ano_nascimento == ano_atual && dia_nascimento == dia_atual && mes_atual == "01"){
            //     qtdMes = 0
            //     qtdDias = 0
            //     legendAge.innerHTML = `${qtdMes + 1} mes`
            // } else {
            //     legendAge.innerHTML = `${qtdMes + 1} meses`
            // }
            // if(mes_nascimento == mes_atual && ano_nascimento == ano_atual && dia_atual == "01"){
            //     qtdMes = 0
            //     qtdDias = 0
            //     legendAge.innerHTML = `${qtdDias + 1} dia`
            // } else {
            //     legendAge.innerHTML = `${qtdDias + 1} dias`
            // }
            // if(mes_nascimento < mes_atual && dia_nascimento < dia_atual){
            //     while(mes_nascimento == mes_atual && dia_nascimento == dia_atual){
            //     qtdMes = 0
            //     qtdDias = 0
            //     qtdDias++
            //     dia_nascimento++
            //     qtdMes++
            //     if(dia_nascimento == diasDoMes(mes_nascimento, ano_nascimento)){
            //        let meses =  dia_nascimento + qtdDias
            //        qtdDias = Math.abs(dia_nascimento - dia_atual)
            //     legendAge.innerHTML = `${qtdAno} anos, ${meses} meses e ${qtdDias} dias`
            //     } else {
            //         qtdDias = Math.abs(dia_nascimento - dia_atual)
            //     legendAge.innerHTML = `${qtdAno} anos, ${qtdMes} meses e ${qtdDias} dias`
            //     }
            //     if(qtdMes == 12){
            //      qtdMes = qtdMes - 1
            //     }
                
            // }
            // } else if(ano_atual == ano_nascimento && mes_nascimento == mes_atual && dia_nascimento < dia_atual) {
            //    qtdMes = 0
            //    qtdDias = Math.abs(dia_nascimento - dia_atual)
            //    if( qtdDias == 1){
            //     legendAge.innerHTML = `${qtdDias} dia`
            // } else {
            //     legendAge.innerHTML = `${qtdDias} dias`
            // }
            // }
            // if(ano_atual != ano_nascimento && mes_nascimento == mes_atual && dia_nascimento > dia_atual){
            //     //qtdMes = 0
            //     qtdDias = Math.abs(dia_nascimento - dia_atual)
            //     legendAge.innerHTML = `${qtdAno} anos e ${qtdDias} dias`
            // } else if(ano_atual != ano_nascimento && mes_nascimento == mes_atual && dia_nascimento == dia_atual){
            //     //qtdDias = 0
            //     qtdMes
            //     legendAge.innerHTML = `${qtdAno} anos, ${qtdMes} meses`
            // }if (qtdAno == 0 && qtdMes == 0 && qtdDias == 0){
            //     legendAge.innerHTML = `A criança nasceu hoje!`
            // }
            // debugger
    //     }
    //     let verificadorAtual = ano_atual + mes_atual + dia_atual 
    //     console.log("verificadorAtual", verificadorAtual)
    //     let verificadorNascimento = ano_nascimento + mes_nascimento + dia_nascimento 
    //     console.log("verificadorNascimento", verificadorNascimento)
    //     let verificado = verificadorNascimento - verificadorAtual
    //     if(validaData(dia_nascimento, mes_nascimento, ano_nascimento) == 1 && verificado <= 0 && ano_nascimento <= ano_atual){
    //     calculandoIdade(dia_nascimento, mes_nascimento, ano_nascimento, dia_atual, mes_atual, ano_atual)
    //     } else {
    //         legendAge.innerHTML = `Data invalida!`
    //     }
    //     console.log("verificado", verificado);
    // }

ufInput.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelUf.classList.replace('genericLabelIsLater','label_uf')
    } else {
        labelBorn.classList.replace('label_uf','genericLabelIsLater')
    }
})

municipioInput.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelMunicipio.classList.replace('genericLabelIsLater','label_municipio')
    } else {
        labelBorn.classList.replace('label_municipio','genericLabelIsLater')
    }
})
resildencialInput.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelResildencial.classList.replace('genericLabelIsLater','label_residencial')
    } else {
        labelBorn.classList.replace('label_residencial','genericLabelIsLater')
    }
})
celularInput.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelCelular.classList.replace('genericLabelIsLater','label_celular')
    } else {
        labelBorn.classList.replace('label_celular','genericLabelIsLater')
    }
})
patientInput.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelPatient.classList.replace('genericLabelIsLater','label_patient')
    } else {
        labelBorn.classList.replace('label_patient','genericLabelIsLater')
    }
})
motherInput.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelMother.classList.replace('genericLabelIsLater','label_mather')
    } else {
        labelBorn.classList.replace('label_mather','genericLabelIsLater')
    }
})
fatherInput.addEventListener("focusout", (e)=>{
    valor = e.target.value;
    if (valor === "") {
        labelFather.classList.replace('genericLabelIsLater','label_father')
    } else {
        labelBorn.classList.replace('label_father','genericLabelIsLater')
    }
})
// bornDate.addEventListener("click", ()=>{
//     labelBorn.classList.replace('label-born','label-born__islater')
//     console.log("clicou")
// })
// labelBorn.addEventListener("click", ()=>{
//     labelBorn.classList.replace('label-born','label-born__islater')
// })
// bornDate.addEventListener("focusout", (e)=>{
//     valor = e.target.value;
//     if (valor === "") {
//     labelBorn.classList.replace('label-born__islater','label-born')
//     verificado.style.display = 'none';
//     errorDetect.style.display = 'none';
//     } else {
//         labelBorn.classList.replace('label-born','label-born__islater')
//     }
// })
//------------------------------------------------------------------------------------
// Validação de Dados
resildencialInput.addEventListener("input", (e) => {
    e.currentTarget.maxLength = 14
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{4})/, "($1) $2-")
    e.currentTarget.value = value
    return e
})
celularInput.addEventListener("input", (e) => {
    e.currentTarget.maxLength = 15
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{5})/, "($1) $2-")
    e.currentTarget.value = value
    return e
})
patientInput.addEventListener("input", (e) => {
    e.currentTarget.maxLength = 50
    let value = e.currentTarget.value
    value = value.replace(/\d/g, "")
    e.currentTarget.value = value
    return e
})
bornDate.addEventListener("input", (e) => {
    e.currentTarget.maxLength = 10
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    .replace(/(\d{2})+(\d{2})+(\d{4})/g, "$1/$2/$3")
    e.currentTarget.value = value
    return e
})
cpfId.addEventListener("input", (e) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    .replace(/(\d{3})+(\d{3})+(\d{3})+(\d{2})/g, "$1.$2.$3-$4")
    e.currentTarget.value = value;
    if (value.length == 14) {
                labelCpf.innerHTML=`<label>CPF</label>`
                let cpf = cpfId.value.replace(/[. -]/g, "");
                const resultadoValidacao = validaCPF(cpf);
                
                if (resultadoValidacao == true) {
                    setTimeout(() => {
                        verificado.style.display = 'block';
                        errorDetect.style.display = 'none';
                    }, 600);
                } else {
                    setTimeout(() => {
                        errorDetect.style.display = 'block';
                        verificado.style.display = 'none';
                    }, 600);
                }
    } else {
        labelCpf.innerHTML=`<label>DNV</label>`
        verificado.style.display = 'none';
        errorDetect.style.display = 'none';
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
// let entr = document.querySelector(".form-control").value 
// entr.addEventListener('keypress', function(e){
//     if (!checkInput(e)){
//         e.preventDefault();
//     }
// });

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
    verficarUf()
    return true;
    
}
function verficarUf() {   
    let qtdDigitosCpf = cpfId.value.length
if( qtdDigitosCpf == 14){
         let valorUf = cpfId.value.charAt(10)
             if(valorUf == '0'){
                setTimeout(() => {
                    labelUf.classList.replace('label_uf','genericLabelIsLater')
                    ufInput.value = "RS"
                    
                }, 1000);
             } else if(valorUf == '8'){
                setTimeout(() => {
                    labelUf.classList.replace('label_uf','genericLabelIsLater')
                    ufInput.value = "SP"
                    
                }, 1000);
             } else if(valorUf == '7'){
                setTimeout(() => {
                    labelUf.classList.replace('label_uf','genericLabelIsLater')
                    ufInput.value = "RJ"
                    
                }, 1000);
             } else if(valorUf == '6'){
                setTimeout(() => {
                    labelUf.classList.replace('label_uf','genericLabelIsLater')
                    ufInput.value = "MG"
                    
                }, 1000);
             } 
    } 
} 
cpfId.addEventListener("keyup", () => {
let qtdDigitosCpf = cpfId.value.length
        if( qtdDigitosCpf != 14){
                ufInput.value = ""
                labelUf.classList.replace('genericLabelIsLater','label_uf')
        }
})