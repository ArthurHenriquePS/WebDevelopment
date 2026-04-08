let titulo = "Aprender JavaScript";
let descricao = "Estudar manipulação de Strings";

console.log("Titulo: ", titulo);
console.log("Descrição: ", descricao);

// Comprimento de String
console.log("Comprimento do título: ", titulo.length);

// Acesso a caracteres individuais
console.log("Primeiro caractere: ",titulo[0]);

console.log("Último caractere: ", titulo[titulo.length - 1]);

console.log("Caractere na posição 7: ", titulo.charAt(7))

/// Concatenação tradicional
let categoria = "Estudo";

let infoCompleta = "Categoria: " + categoria + " + " + titulo;

console.log("Concatenação tradicional: ", infoCompleta)

// templates Strings (ES6+)
let dataCriacao = "07/04/2026";
let resumo = `Tarefa: ${titulo} (${categoria})
Criada em: ${dataCriacao}
Descrição: ${descricao}
`;
console.log("Template String: ");
console.log(resumo);

// Métodos para busca em strings
console.log("Posição de 'JavaScript':", titulo.indexOf("JavaScript"));
console.log("'JavaScript' está presente?", titulo.includes("JavaScript"));
console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender"));
console.log("Termina com 'Script'?", titulo.endsWith("Script"));

// Função que trunca uma string se ela for maior que um tamanho máximo

const truncarDescricao = (texto, maxLenght=30) => {
    if(texto.length <= maxLenght){
        return texto;
    }
    return texto.substring(0, maxLenght) + "...";
}

let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";
console.log(`Variável original : ${descricaoLonga}`);
console.log(`Variável truncada : ${truncarDescricao(descricaoLonga)}`);
console.log(`Variável original : ${truncarDescricao(descricaoLonga, 20)}`);

let texto = "JavaScript é incrível!";
console.log("Original:", texto);
console.log("slice(0, 10):", texto.slice(0, 10));      // "JavaScript"
console.log("substring(0, 10):", texto.substring(0, 10)); // "JavaScript"

// String e array
let tags = "javascript,programação,web,frontend";

let arrayTags = tags.split(",");
console.log("Array de tags:", arrayTags);

let listaTarefas = ["Estudar JS", "Criar TaskMaster", "Testar aplicação"];
let textoTarefas = listaTarefas.join(" | ");
console.log("Lista de tarefas formatada:", textoTarefas);


// Math
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);

const raio = 5;
const areaCirculo = Math.PI * Math.pow(raio, 2);
console.log(`Área de um círculo com raio ${raio}: ${areaCirculo}`);

// _________________________________
const numero = 9.7;
console.log("Math.round(9.7):", Math.round(numero));
console.log("Math.floor(9.7):", Math.floor(numero));
console.log("Math.ceil(9.7):", Math.ceil(numero));
console.log("Math.trunc(9.7):", Math.trunc(numero));

const pi = Math.PI;
console.log("Pi com 2 casas decimais:", pi.toFixed(2));

// Date

// Data atual
const hoje = new Date();
console.log("Data atual:", hoje.toString());

// Data a partir de string ISO
const dataISO = new Date("2025-06-15T10:30:00");
console.log("Data a partir de string ISO:", dataISO);

// Data a partir de componentes (mês: 0 a 11)
const dataComponentes = new Date(2025, 5, 15, 10, 30, 0);
console.log("Data a partir de componentes:", dataComponentes);

// Função para formatar data no formato "DD/MM/AAAA"
function formatarData(data) {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

console.log("Data formatada:", formatarData(hoje));

// Função para adicionar dias a uma data
function adicionarDias(data, dias) {
  const novaData = new Date(data);
  novaData.setDate(data.getDate() + dias);
  return novaData;
}

const amanha = adicionarDias(hoje, 1); // hoje = new Date()
console.log("Amanhã:", formatarData(amanha));

// Diferença entre duas datas (em milissegundos) e conversão para dias
const dataInicial = new Date(2025, 0, 1);
const dataFinal = new Date(2025, 11, 31);
const diferencaMs = dataFinal - dataInicial;
const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
console.log("Diferença em dias:", diferencaDias);