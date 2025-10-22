// Função para calcular o orçamento mensal
function calcularOrcamento() {
  // Pegando os valores dos inputs
  const renda = Number(document.getElementById("renda").value);
  const alimentacao = Number(document.getElementById("alimentacao").value);
  const transporte = Number(document.getElementById("transporte").value);
  const moradia = Number(document.getElementById("moradia").value);
  const lazer = Number(document.getElementById("lazer").value);
  const outros = Number(document.getElementById("outros").value);

  // Verificando se o valor da renda é válido
  if (isNaN(renda) || renda <= 0) {
    alert("Por favor, insira uma receita válida.");
    return;
  }

  // Calculando despesas e saldo
  const totalDespesas = alimentacao + transporte + moradia + lazer + outros;
  const saldo = renda - totalDespesas;

  // Selecionando a div de resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <h3>💬 Resultado do Mês</h3>
    <p>Receita total: <strong>R$ ${renda.toFixed(2)}</strong></p>
    <p>Despesas totais: <strong>R$ ${totalDespesas.toFixed(2)}</strong></p>
    <p>Saldo final: <strong>R$ ${saldo.toFixed(2)}</strong></p>
  `;

  // Mudando a cor e mensagem conforme o saldo
  if (saldo > 0) {
    resultado.style.background = "rgba(0, 255, 127, 0.2)";
    resultado.style.border = "2px solid #00ff7f";
    resultado.style.color = "#00ff7f";
    resultado.innerHTML += "<p>🎉 Parabéns! Você terminou o mês no <strong>lucro</strong>!</p>";
  } else if (saldo < 0) {
    resultado.style.background = "rgba(255, 0, 0, 0.2)";
    resultado.style.border = "2px solid #ff4d4d";
    resultado.style.color = "#ff6666";
    resultado.innerHTML += "<p>⚠️ Cuidado! Você gastou mais do que ganhou.</p>";
  } else {
    resultado.style.background = "rgba(255, 255, 255, 0.1)";
    resultado.style.border = "2px solid #00bfff";
    resultado.style.color = "#00bfff";
    resultado.innerHTML += "<p>💡 Equilíbrio total! Seu orçamento está em dia.</p>";
  }
}
