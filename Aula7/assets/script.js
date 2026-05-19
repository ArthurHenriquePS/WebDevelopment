// getElementById('id') – seleciona um elemento por ID
// getElementsByClassName('classe') – retorna uma coleção de elementos
// getElementsByTagName('tag') – retorna todos os elementos da tag
// querySelector('seletor') – retorna o primeiro elemento que corresponde
// querySelectorAll('seletor') – retorna todos os elementos que correspondem

// Ele troca o título da página
const titulo = document.querySelector('h1');
console.log(`Titulo representa: ${titulo}`)
titulo.textContent = 'Novo Titulo';

// Ele adiciona valores de html no id container
const div = document.querySelector('#container');
div.innerHTML = "<p>Novo parágrafo com JavaScript no HTML</p>";

// textContent = Usado para inserir texto
// innerHTML = Usado para inserir HTML

// const container = document.getElementById("container")
// console.log(container)

// Adicionando imagens pelo JavaScript
const imagem = document.querySelector('img');
console.log(imagem)

// É possível atribuir o atributo da tag no HTML
imagem.setAttribute('src','img/bob-esponja.jpg')
// Adiciona um alt na imagem
imagem.alt = "Profile"

const caixa = document.querySelector(".box")
// Define o tamanho do elemento
// caixa.style.width = "100px"
// caixa.style.height = "100px"
// caixa.style.backgroundColor = 'lightgrenn';
// caixa.style.border = '10px solid black';

// // Adiciona o item
// caixa.classList.add('oculto');
// // Remove o item
// caixa.classList.remove('oculto');

const botao = document.getElementById("meuBotao")
console.log(botao)

// Toda vez que eu clicar no botão, ele faz
// addEvetListener("click, change, keydown", "Função ou objeto com o método que será executado quando o evento ocorrer")
botao.addEventListener('click', () => {
    // Se o elemento estiver na página, ele desaparece, se não ele aparece
    caixa.classList.toggle("oculto")
});

const novoItem = document.createElement('li');

novoItem.textContent = "Novo item"

// appendChild = Adiciona um novo nó como o último filho de um nó pai 
document.querySelector('ul').appendChild(novoItem)
// Remove o item
novoItem.remove()

document.querySelector("#addItem").addEventListener("click", () => {
    const novoItem2 = document.createElement('li');
    novoItem2.textContent = new Date().getTime()
    document.querySelector('ul').appendChild(novoItem2);

});

localStorage.setItem("nome1", "João");
localStorage.setItem('nome2', 'Arthur');
localStorage.setItem('nome3', 'Anna');

console.log(localStorage.getItem("nome"));

// Limpa o que você quer
// localStorage.removeItem("nome")

// Limpa tudo
// localStorage.clear()

const usuario = {nome: "Arthur", idade: "18"};
// Converte o dicionário para string
localStorage.setItem("usuário", JSON.stringify(usuario))
// Converte para dicionário novamente
const valorRecuperado = JSON.parse(localStorage.getItem('usuario'));


let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

const renderizarTarefas = () =>{
    const lista = document.getElementById("lista-tarefas")
    lista.innerHTML = ""
    tarefas.forEach((t) => {
        const li = document.createElement("li")
        li.textContent = t
        lista.appendChild(li)
    })
}

renderizarTarefas()

// Função para adicionar uma tarefa no localStorage
const addTarefa = () => {
    const input = document.getElementById("inputTarefa")
    tarefas.push(input.value)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    // valeu = Manipular o valor inserido
    input.value = ""
}
// addEventListener("click") = onsubmit
document.getElementById("form-tarefa").onsubmit = (event) => {
    event.preventDefault() // Evita que a página recarregue
    addTarefa()
    renderizarTarefas()
}


const limpar = () => {
    tarefas = []
    localStorage.removeItem("tarefas")
    renderizarTarefas()
}

document.getElementById("btn-limpar").onclick = () => {
    limpar()
}