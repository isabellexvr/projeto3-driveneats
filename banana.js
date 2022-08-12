function selecionar(classeOpcao) {
    const opcaoselecionada = document.querySelector("selecionado");
    if (opcaoselecionada !== null) {
        opcaoselecionada.classList.remove("selecionado");
    }
    const seletor = "." + classeOpcao;
    const opcao = document.querySelector(seletor);
    opcaoselecionada.classList.toggle("selecionado");
}