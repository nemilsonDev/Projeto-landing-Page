var setadireita = window.document.getElementById("setadireita")
var bruna =  window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function RolaParaEsquerda(){
    leonardo.style = "displaay:flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}