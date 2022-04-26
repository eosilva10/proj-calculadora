let btnIgual = 0

let botaoInput = document.querySelectorAll(".botao-input")

let input = document.getElementById("input")
let igual = document.getElementById("igual")
let limpar = document.getElementById("limpar")
let limmparSimples = document.getElementById("limparSimples")


window.onload = () => {
    input.value = ""
} 

botaoInput.forEach((classeBtn) => {
    classeBtn.addEventListener("click", () => {
        if (btnIgual == 1) {
            input.value = ""
            btnIgual = 0
        }
        input.value += classeBtn.value
    })
})

// FUNÇÃO PARA RESOLVER A OPERAÇÃO DO USUÁRIO
igual.addEventListener("click", () => {
    btnIgual = 1
    let inp_val = input.value
    try {
        let soluçao = eval(inp_val)

        if(Number.isInteger(soluçao)) {
            input.value = soluçao
        }
        else {
            input.value = soluçao.toFixed(2)
        }
    }
    catch(erro) {
        alert("Operação Invalida!")
    }
})

// FUNÇÃO PARA LIMPAR O CAMPO INPUT INTEIRO
limpar.addEventListener("click", () => {
    input.value = ""
})

// FUNÇÃO PARA APAGAR O ULTIMO DÍGITO
limmparSimples.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length -1)
})