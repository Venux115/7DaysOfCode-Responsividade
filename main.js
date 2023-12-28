const btMaisOpcoes = document.querySelector(".rodape__botao")
const ulOpcoes = document.querySelector(".opcoes__lista")
const formalario = document.querySelector(".formulario")
const main = document.querySelector(".overlay")


btMaisOpcoes.addEventListener("click", () => {
    if (window.innerWidth < 1280){
        ulOpcoes.classList.toggle("hidden")
        main.classList.toggle("hidden")
    }else{
        formalario.classList.toggle("hidden")
        main.classList.toggle("hidden")
    }

})