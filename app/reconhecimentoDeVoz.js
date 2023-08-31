window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();
const elementoChute = document.getElementById('chute');

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    chute = event.results[0][0].transcript.replace('.', '');
    exibeChuteNaTela(chute);
    validaChute(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => {
    recognition.start();
})
