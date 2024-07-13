let listaDeNumerosSorteados = [];
let numeroMaximo = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

exibirTextonaTela('h1', 'Jogo do numero secreto');
exibirTextonaTela('p', 'escolha um numero entre 1 a 10');




function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length

if (quantidadeDeElementos == 3) {
    listaDeNumerosSorteados = []
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
    return numeroEscolhido


}
   
} 

    

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextonaTela('h1', 'acertou!!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =  `voce descobriu o numero secreto com ${tentativas} ${palavratentativa}`;
        
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextonaTela('p', 'o numero secreto e menor');
        } else {
            exibirTextonaTela('p', 'o numero secreto e maior');
        }
        tentativas++
       limparCampo()
}    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextonaTela('h1', 'Jogo do numero secreto');
    exibirTextonaTela('p', 'escolha um numero entre 1 a 10');
}



  








