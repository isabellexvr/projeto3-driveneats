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

function confirmar() {
    if (prato !== undefined) {

        if (bebida !== undefined) {

            if (sobremesa !== undefined) {

                let pratoSelecionado = document.querySelector('.prato .selecionado h1').innerHTML
                let bebidaSelecionada = document.querySelector('.bebida .selecionado h1').innerHTML
                let sobremesaSelecionada = document.querySelector('.sobremesa .selecionado h1').innerHTML

                let valorPrato = document.querySelector('.prato .selecionado h3 span').innerHTML.replaceAll(',','.')
                let valorBebida = document.querySelector('.bebida .selecionado h3 span').innerHTML.replaceAll(',','.')
                let valorSobremesa = document.querySelector('.sobremesa .selecionado h3 span').innerHTML.replaceAll(',','.')
                let soma = parseInt(valorPrato) + parseInt(valorBebida) + parseInt(valorSobremesa)

                let msg = `Olá, gostaria de fazer o pedido:
                - Prato: ${pratoSelecionado}
                - Bebida: ${bebidaSelecionada}
                - Sobremesa: ${sobremesaSelecionada}
                Total: R$ ${soma.toFixed(2).toString()}`

                let msgCodificada = encodeURIComponent(msg)

                window.open("https://wa.me/5582981897699?text=" + encodeURIComponent(msg));
            }
        }
    }
}

