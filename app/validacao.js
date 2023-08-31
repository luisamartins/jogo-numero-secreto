function validaChute(chute) {
    const numero = +chute;
    console.log(numero);

    if (naoForNumero(numero)) {
        elementoChute.innerHTML += `
        <div class='dica'>Valor inválido!</div>
        <div>Fale um número</div>
        `;
        return;
    }
        
    if (estiverForaDoIntervalo(numero)) {
        elementoChute.innerHTML += `
        <div class='dica'>Valor fora do intervalo!</div>
        <div>Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    } 

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class='botao' id='jogar-novamente'>Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div class="dica">O número secreto é menor <i class="fa-solid fa-chevron-down"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div class="dica">O número secreto é maior <i class="fa-solid fa-chevron-up"></i></div>
        `
    }
}

function estiverForaDoIntervalo(numero) {
    return numero > maiorValor || numero < menorValor;
}

function naoForNumero(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', onClick);

function onClick(event) {
    if (event.target.id === 'jogar-novamente') {
        window.location.reload();
    }
}