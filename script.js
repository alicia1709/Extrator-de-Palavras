const botaomostraPalavras = document.querySelector('#botao-palavrachave');

botaomostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave (){
    const texto = document.querySelector('#entrada-de-texto').ariaValueMax;
    const campoResultado = document.querySelector('#resultado-palavrachave');

    campoResultado.textContent = texto;
}