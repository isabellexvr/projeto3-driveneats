function selecionarItem(div) {
    const parent = div.parentNode;
    // div.parentNode é a div pai da div que contem o onclick
    const length = parent.children.length;
    // length tem a quantidade de divs filhas contidas na div opçoes, que é a div pai que contem o onclick
    const esconder = div.children[0];
    // div.children[0] é o mesmo que a primeira filha da div q tá com o onclick, a div que tem o checkmark
    
    for(let i = 0; i < length; i++){
        //o loop passa por dentro da div opçoes, e para em length, no ultimo filho da div opçoes, de um em um
        parent.children[i].classList.remove('selecionado');
        // para cada div filha da div opçoes, ele garante que remove a tag selecionado
        parent.children[i].children[0].classList.add('esconder');
        //e, para as divs filhas de cada div filha da div opçoes, ele esconde todas elas
    }
    //depois, adiciona a seleçao e remove o esconder so uele que foi clicado
    esconder.classList.remove('esconder')
    div.classList.add('selecionado')

    prato = document.querySelector('.prato .selecionado')
    bebida = document.querySelector('.bebida .selecionado')
    sobremesa = document.querySelector('.sobremesa .selecionado')

    fecharPedido()
}

let prato;
console.log(prato)
let bebida;
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

                let valorPrato = document.querySelector('.prato .selecionado h3 span').innerHTML.replaceAll(',', '.')
                let valorBebida = document.querySelector('.bebida .selecionado h3 span').innerHTML.replaceAll(',', '.')
                let valorSobremesa = document.querySelector('.sobremesa .selecionado h3 span').innerHTML.replaceAll(',', '.')
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
