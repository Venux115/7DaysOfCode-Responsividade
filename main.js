const btMaisOpcoes = document.querySelector(".rodape__botao")
const ulOpcoes = document.querySelector(".opcoes__lista")
const main = document.querySelector(".overlay")


btMaisOpcoes.addEventListener("click", () => {
    ulOpcoes.classList.toggle("hidden")
    main.classList.toggle("hidden")
})