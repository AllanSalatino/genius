const bt_informacoes = document.getElementById("informacoes")
const bt_verde = document.getElementById("verde")
const bt_amarelo = document.getElementById("amarelo")
const bt_vermelho = document.getElementById("vermelho")
const bt_azul = document.getElementById("azul")

bt_verde.value = 1
bt_amarelo.value = 2
bt_vermelho.value = 3
bt_azul.value = 4

let sequenciaDoUsuasio = []
let resultSequenciaDoPc = []

let contador = 0


function geraCorAleatoria() {
    let min = 1
    let max = 5
    min = Math.ceil(min);
    max = Math.floor(max);
    
    resultSequenciaDoPc.push(Math.floor(Math.random() * (max - min)) + min)
    let resultCor = resultSequenciaDoPc[contador]
    piscarCor(resultSequenciaDoPc)
}

function addNumeroArr(event){
    const eventClick = event.target
    if(eventClick === bt_verde){
        sequenciaDoUsuasio.push(bt_verde.value)
    }
    if(eventClick === bt_amarelo){
        sequenciaDoUsuasio.push(bt_amarelo.value)
    }
    if(eventClick === bt_vermelho){
        sequenciaDoUsuasio.push(bt_vermelho.value)
    }
    if(eventClick === bt_azul){
        sequenciaDoUsuasio.push(bt_azul.value)
    }
} 

function confereAcerto(){
    if(sequenciaDoUsuasio.length === resultSequenciaDoPc.length){
        console.log(`PC: ${resultSequenciaDoPc}`)
        console.log(`Usuario: ${sequenciaDoUsuasio}`)
        
        if(resultSequenciaDoPc.join("").includes(sequenciaDoUsuasio.join(""))){
            sequenciaDoUsuasio = []
            contador++
            bt_informacoes.innerText = `${contador}`
            geraCorAleatoria()
        }    
        else{
            resultSequenciaDoPc = []
            sequenciaDoUsuasio = []
            contador = 0
            console.log("GameOver")
            bt_informacoes.innerText ="GameOver"
            bt_informacoes.style.fontSize = "18px"
            bt_informacoes.style.color = "red"
        }
    }
} 


function piscarCor() {
    for(let i=0; i<=resultSequenciaDoPc.length; i++){
        if(bt_verde.value === resultSequenciaDoPc[i]){
            bt_verde.classList.toggle("ativo")
            setTimeout(removeClassVerde, 1300)
        }
        if(bt_amarelo.value === resultSequenciaDoPc[i]){
            bt_amarelo.classList.toggle("ativo")
            setTimeout(removeClassAmarelo, 1300)
        }
        if(bt_vermelho.value === resultSequenciaDoPc[i]){
            bt_vermelho.classList.toggle("ativo")
            setTimeout(removeClassVermelho, 1300)
        }
        if(bt_azul.value === resultSequenciaDoPc[i]){
            bt_azul.classList.toggle("ativo")
            setTimeout(removeClassAzul, 1300)
        }
    } 
}

function removeClassVerde(){
    bt_verde.classList.remove("ativo")
}
function removeClassAmarelo(){
    bt_amarelo.classList.remove("ativo")
}
function removeClassVermelho(){
    bt_vermelho.classList.remove("ativo")
}
function removeClassAzul(){
    bt_azul.classList.remove("ativo")
}


bt_informacoes.addEventListener("click", geraCorAleatoria)

bt_verde.addEventListener("click", addNumeroArr)
bt_verde.addEventListener("click", confereAcerto)

bt_amarelo.addEventListener("click", addNumeroArr)
bt_amarelo.addEventListener("click", confereAcerto)

bt_vermelho.addEventListener("click", addNumeroArr)
bt_vermelho.addEventListener("click", confereAcerto)

bt_azul.addEventListener("click", addNumeroArr)
bt_azul.addEventListener("click", confereAcerto)
