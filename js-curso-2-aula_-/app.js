let numerosSorteados = [];
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 0;

mensagemInicial();

function preencheCampo(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial() {
   preencheCampo('h1', "Jogo do Número Secreto");
   preencheCampo('p', `Escolha um número de 1 a ${numeroLimite}`);
}

function verificarChute() {
   tentativas++;
   let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
   let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto) {
      preencheCampo('h1', "Acertou!");
      preencheCampo('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
         if (chute > numeroSecreto) {
         preencheCampo('p', "O número secreto é menor!");
      } else {
         preencheCampo('p', 'O número secreto é maior!');
      }
      limparCampo();
   }
}

function gerarNumeroAleatorio() {
   console.log(numerosSorteados)
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeNumerosSorteados = numerosSorteados.length;

   if (quantidadeNumerosSorteados == numeroLimite) {
      numerosSorteados = [];
   }

   if (numerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
   } else {
      numerosSorteados.push(numeroEscolhido);
      return numeroEscolhido
   }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo() {
   limparCampo();
   tentativas = 0;
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
   numeroSecreto = gerarNumeroAleatorio()
}




