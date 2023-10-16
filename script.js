const displayCalculo = document.querySelector(".display_calculo");
const displayResultado = document.querySelector(".display_resultado");
const botoes = document.querySelectorAll(".botao");
let numeroAtual = "";

botoes.forEach(botao => {
    botao.addEventListener("click", (evento) => {
        let valorClicado = evento.target.innerText;

        switch (valorClicado) {
            case 'Ac':
                limpaDisplay();
            break;
            case '<':
                limpaDigito();
            break;
            case '=':
                calculaResultado();
            break;
            default:
                adicionaDigito(valorClicado);
            break;
        }
    });
});

function adicionaDigito(digito){
    let valorExibido = document.querySelector(".display_resultado").innerText;

    if(numeroAtual.includes(".") && digito === "."){
        return;
    }else{
        displayResultado.innerHTML = valorExibido + digito;
        if(isNaN(digito) && digito != "."){
            numeroAtual = "";
        } else {
            numeroAtual += digito;
        }
    }
}

function limpaDisplay(){
    displayResultado.innerText = "";
    displayCalculo.innerText = "";
    numeroAtual = "";
}

function limpaDigito(){
    let valorExibido = document.querySelector(".display_resultado").innerText;
    displayResultado.innerHTML = valorExibido.substring(0, valorExibido.length - 1);
    numeroAtual = numeroAtual.substring(0, numeroAtual.length - 1);
}

function calculaResultado(){
    let resultado = eval(displayResultado.innerText);
    displayCalculo.innerHTML = displayResultado.innerText;
    displayResultado.innerHTML = resultado;
}
