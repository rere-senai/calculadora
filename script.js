function calcular() {
  let capital = Number(document.getElementById("capital").value);
  let taxa = Number(document.getElementById("taxa").value) / 100;
  let tempo = Number(document.getElementById("tempo").value);

  if (!capital || !taxa || !tempo) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  // Cálculo de Juros Simples
  let jurosSimples = capital * taxa * tempo;
  let montanteSimples = capital + jurosSimples;

  // Cálculo de Juros Compostos
  let montanteCompostos = capital * Math.pow(1 + taxa, tempo);
  let jurosCompostos = montanteCompostos - capital;

  // Exibir resultados
  document.getElementById("jurosSimples").innerText = jurosSimples.toFixed(2);
  document.getElementById("jurosCompostos").innerText = jurosCompostos.toFixed(2);
  document.getElementById("montanteSimples").innerText = montanteSimples.toFixed(2);
  document.getElementById("montanteCompostos").innerText = montanteCompostos.toFixed(2);
 
  // Mostrar a div de resultados
  document.getElementById("resultado").style.display = "block";
}

function limparFormulario() {
  document.getElementById("capital").value = "";
  document.getElementById("taxa").value = "";
  document.getElementById("tempo").value = "";
  document.getElementById("resultado").style.display = "none";
}
