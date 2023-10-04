const displayCalculo = document.querySelector(".display_calculo");
const displayResultado = document.querySelector(".display_resultado");
const botoes =  document.querySelectorAll(".botao");

botoes.forEach(botao => {
    botao.addEventListener("click", (evento) => {
        let valorClicado = evento.target.innerText;
        console.log(valorClicado)
    });
});
