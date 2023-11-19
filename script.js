const menu = document.getElementById("menu");
const scrollLimite = 100;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollLimite) {
      menu.classList.add("shrink");
  } else {
      menu.classList.remove("shrink");
  }
});

function salvar() {
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;

  let dadosArmazenados = localStorage.getItem('dados');
  let dados = [];

  if (dadosArmazenados) {
    dados = JSON.parse(dadosArmazenados);
  }

  const novoDado = {
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    telefone: telefone,
    email: email
  };

  const urlParams = new URLSearchParams(window.location.search);
  const chave = urlParams.get('chave');

  if (chave !== null && chave !== '') {
    dados[chave] = novoDado;
  } else {
    dados.push(novoDado);
  }

  localStorage.setItem('dados', JSON.stringify(dados));

  location.reload();
}