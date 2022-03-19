var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var mensagemTentativas = document.getElementById("mensagemTentativas");

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Parabens!! Você descobriu o número da sorte!";
    mensagemTentativas.innerHTML = "👍";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML = `Você errou, o número é menor do que ${chute}.Tente novamente!`;
    mensagemTentativas.innerHTML =
      "<mark>" +
      `Você têm ${tentativas} tentativas para advinhar o número da sorte!` +
      "</mark>";
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML = `Você errou, o número é maior do que ${chute}.Tente novamente!`;
    mensagemTentativas.innerHTML =
      "<mark>" +
      `Você têm ${tentativas} tentativas para advinhar o número da sorte!` +
      "</mark>";
  }
  if (tentativas == 0) {
    mensagemTentativas.innerHTML =
      "<mark>" +
      `Ahh que pena, acabaram suas tentativas! Jogue novamente!` +
      "</mark>";
    elementoResultado.innerHTML = `O número da sorte era: ${numeroSecreto}`;
  }
}

function Zerar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  resultado.innerHTML = " ";
  valor.value = " ";
  mensagemTentativas.innerHTML =
    "<mark>" +
    `Você têm ${tentativas} tentativas para advinhar o número da sorte!` +
    "</mark>";
}

/* 
Desafios:

Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.

Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.

Pesquisar e aprender a diferença entre == e ===
*/