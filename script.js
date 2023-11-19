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
const noticias = [
  {
    texto: "A terra é plana.",
    imagem: "images/screaming-lee2.gif"
  },
  {
    texto: "Muito plana.",
    imagem: "images/screaming-lee2.gif"
  },
  {
    texto: "Não é redonda.",
    imagem: "images/screaming-lee2.gif"
  },
  {
    texto: "É lisa.",
    imagem: "images/screaming-lee2.gif"
  },
  {
    texto: "Muito lisa.",
    imagem: "images/screaming-lee2.gif"
  },
];

function exibirNoticias() {
  let i = 0;
  let continuar = true;
  const container = document.getElementById('noticias-container');

  while (continuar && i < noticias.length) {
    const noticia = noticias[i];
    const noticiaElement = document.createElement('div');
    noticiaElement.classList.add('noticia');

    const imagemElement = document.createElement('img');
    imagemElement.src = noticia.imagem;
    noticiaElement.appendChild(imagemElement);

    const textoElement = document.createElement('p');
    textoElement.textContent = noticia.texto;
    noticiaElement.appendChild(textoElement);

    container.appendChild(noticiaElement);
    i++;

    continuar = confirm("Deseja ver mais notícias? Clique em OK para continuar ou Cancelar para parar.");
  }
}