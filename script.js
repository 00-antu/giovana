// Cadastro da loja
const formLoja = document.getElementById("formLoja");

if (formLoja) {
  formLoja.addEventListener("submit", function(event) {
    event.preventDefault();

    const loja = {
      nome: document.getElementById("nomeLoja").value,
      email: document.getElementById("emailLoja").value,
      plano: document.getElementById("planoLoja").value
    };

    localStorage.setItem("loja", JSON.stringify(loja));

    window.location.href = "cadastro-pecas.html";
  });
}


// Cadastro das peças
const formPeca = document.getElementById("formPeca");

if (formPeca) {
  formPeca.addEventListener("submit", function(event) {
    event.preventDefault();

    const peca = {
      nome: document.getElementById("nomePeca").value,
      categoria: document.getElementById("categoriaPeca").value,
      tamanho: document.getElementById("tamanhoPeca").value,
      cor: document.getElementById("corPeca").value,
      quantidade: Number(document.getElementById("quantidadePeca").value),
      preco: Number(document.getElementById("precoPeca").value),
      mes: document.getElementById("mesPeca").value
    };

    let pecas = JSON.parse(localStorage.getItem("pecas")) || [];

    pecas.push(peca);

    localStorage.setItem("pecas", JSON.stringify(pecas));

    alert("Peça cadastrada com sucesso!");

    formPeca.reset();
  });
}


// Relatório
function gerarRelatorio() {
  const resultado = document.getElementById("resultadoRelatorio");
  const filtroMes = document.getElementById("filtroMes").value;

  let pecas = JSON.parse(localStorage.getItem("pecas")) || [];

  if (filtroMes !== "Todos") {
    pecas = pecas.filter(peca => peca.mes === filtroMes);
  }

  if (pecas.length === 0) {
    resultado.innerHTML = "<p>Nenhuma peça cadastrada para esse mês.</p>";
    return;
  }

  let totalPecas = 0;
  let valorTotal = 0;

  let tabela = `
    <table>
      <thead>
        <tr>
          <th>Peça</th>
          <th>Categoria</th>
          <th>Tamanho</th>
          <th>Cor</th>
          <th>Qtd.</th>
          <th>Preço</th>
          <th>Mês</th>
        </tr>
      </thead>
      <tbody>
  `;

  pecas.forEach(peca => {
    totalPecas += peca.quantidade;
    valorTotal += peca.quantidade * peca.preco;

    tabela += `
      <tr>
        <td>${peca.nome}</td>
        <td>${peca.categoria}</td>
        <td>${peca.tamanho}</td>
        <td>${peca.cor}</td>
        <td>${peca.quantidade}</td>
        <td>R$ ${peca.preco.toFixed(2)}</td>
        <td>${peca.mes}</td>
      </tr>
    `;
  });

  tabela += `
      </tbody>
    </table>

    <div class="resumo">
      <h2>Resumo</h2>
      <p><strong>Total de peças:</strong> ${totalPecas}</p>
      <p><strong>Valor total em estoque:</strong> R$ ${valorTotal.toFixed(2)}</p>
    </div>
  `;

  resultado.innerHTML = tabela;
}