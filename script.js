const opcoes = ["pedra", "papel", "tesoura"];

function obterJogadaUsuario() {
  let jogadaUsuario = '';
  while (!opcoes.includes(jogadaUsuario) && jogadaUsuario !== "sair") {
    jogadaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura (ou 'sair' para encerrar):").toLowerCase();
    if (!opcoes.includes(jogadaUsuario) && jogadaUsuario !== "sair") {
      alert("Opção inválida! Por favor, escolha Pedra, Papel ou Tesoura.");
    }
  }
  return jogadaUsuario;
}

function obterJogadaComputador() {
  const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
  return opcoes[indiceAleatorio];
}

function determinarVencedor(jogadaUsuario, jogadaComputador) {
  if (jogadaUsuario === jogadaComputador) {
    return "Empate!";
  }

  if (
    (jogadaUsuario === "pedra" && jogadaComputador === "tesoura") ||
    (jogadaUsuario === "papel" && jogadaComputador === "pedra") ||
    (jogadaUsuario === "tesoura" && jogadaComputador === "papel")
  ) {
    return "Você venceu!";
  } else {
    return "Computador venceu!";
  }
}

function jogarPedraPapelTesoura() {
  let jogarNovamente = true;

  while (jogarNovamente) {
    const jogadaUsuario = obterJogadaUsuario();

    if (jogadaUsuario === "sair") {
      jogarNovamente = false;
      alert("Obrigado por jogar! Até a próxima!");
      break;
    }

    const jogadaComputador = obterJogadaComputador();

    console.log(`Você escolheu: ${jogadaUsuario}`);
    console.log(`O computador escolheu: ${jogadaComputador}`);

    const resultado = determinarVencedor(jogadaUsuario, jogadaComputador);
    alert(resultado);
    console.log(resultado);
  }
}

jogarPedraPapelTesoura();
