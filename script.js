function selecionarPrato(div) {

    const x = document.querySelector('.prato .selecionado')

    if (x !== null ) {
        x.classList.remove('selecionado');
    } 

     div.classList.add('selecionado')    

     prato = div.innerHTML

     fecharPedido()


}

let prato;

function selecionarBebida(div) {
    const x = document.querySelector('.bebida .selecionado')

    if (x !== null ) {
        x.classList.remove('selecionado');
    } 

     div.classList.add('selecionado')    

     bebida = div.innerHTML

     fecharPedido()
}

let bebida;

function selecionarSobremesa(div) {
    const x = document.querySelector('.sobremesa .selecionado')

    if (x !== null ) {
        x.classList.remove('selecionado');
    } 

     div.classList.add('selecionado')   

     sobremesa = div.innerHTML

     fecharPedido();
}

let sobremesa;

function fecharPedido() {
    if (prato !== undefined) {

        if (bebida !== undefined) {

            if (sobremesa !== undefined) {

                const textoFecharPedido = document.querySelector('.buttontext');
                textoFecharPedido.innerHTML = `Fechar Pedido`;
                const cor = document.getElementsByClassName('botaofechar');
                cor[0].style.backgroundColor = "#32B72F";
            }
        }
    }

}


