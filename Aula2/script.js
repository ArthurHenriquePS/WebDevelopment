// Mensagem normal
console.log("Mensagem normal");
// Mensagem para passar uma informação
console.info("Mensagem de infomação");
// Mensagem amarela de aviso
console.warn("Aviso");
// Mensagem de erro
console.error("Erro");

// Usado para fazer uma tabela no console (Objetos, Strings, Arrays), cada chave é uma linha e cada conteúdo de uma Array é uma coluna
console.table([
    {
        id: 1, tarefa: "Estudar JS"
    },
    {
        id: 2, tarefa: "Praticar código"
    }
]);
// Serve para exibir um conjuto de logs em conjunto (Processos de Debug, quando eu quero separar os logs do console)
console.group("Grupo de Logs");
console.log("log 1");
console.log("log 2");
console.log("log 3");
// Utilizado para finalizar um console.group
console.groupEnd();

// Usado para verificar o tempo que leva para executar o código em milisegundos, é necessário identificar-lo
console.time("Timer")

let casa = "casa";
if (casa == "casa"){
    console.log("casa");
}
// Usado para fechar o código que será gravado o tempo
console.timeEnd("Timer");

// Comentário de uma linha

/*
Usado para comentar várias linhas 
*/

// Variáveis

// ignora o bloco de função, ou seja, executa por todo código
var antigo = "Forma antiga de declarar variáveis";
// novo método de declarar variável (Não executa por todo código)
let userName = "Maria";
// Constatante, o código não consegue alterar
const API_URL = "url";

let texto = "Olá";
// typeof() mostra qual é o tipo da variável
console.log("Tipo = " + typeof(texto) + ", Nome = " + texto);


let numero = 18;
console.log("Tipo = " + typeof(numero) + ", Número = " + numero);


let isCommpleted = false;
console.log("Tipo = " + typeof(isCommpleted) + ", Boolean = " + isCommpleted);

let semValor;
console.log("Tipo = " + typeof(semValor) + ", Undefined = " + semValor);

let nulo = null;
// Quando você vê o tipo da variável null, ele é identificado como objected
console.log("Tipo = " + typeof(nulo) + ", Nulo = " + nulo);

// Sysmbol Identificixadpe único e não quiser dar um tipo específico
let uniqueID = Symbol("id");
console.log(typeof(uniqueID));
console.log(uniqueID)

// O n no final significa que o número é muito grande
let bigNumero = 8923679873n;
console.log("Tipo = " + typeof(bigNumero) + ", Big Número = " + bigNumero);

let task = {
    // Propriedade 1
    id: 1, // Chave: valor
    // Propriedade 2
    title: "Aprender JavaScript", // Chave: valor
    // Propriedade 3
    completed: false, // Chave: valor
    // Propriedade 4
    assignee: {
        name: "João",
        email: "joao@example.com"
    }
};

// Array(Lista) com objetos dentro
let tasks = [
    {
        // Propriedade 1
        id: 1, // Chave: valor
        // Propriedade 2
        title: "Aprender JavaScript", // Chave: valor
        // Propriedade 3
        completed: false, // Chave: valor
        // Propriedade 4
        assignee: {
            name: "João",
            email: "joao@example.com"
        }
    },
    {
        // Propriedade 1
        id: 2, // Chave: valor
        // Propriedade 2
        title: "Aprender python", // Chave: valor
        // Propriedade 3
        completed: false, // Chave: valor
        // Propriedade 4
        assignee: {
            name: "Maria",
            email: "maria@example.com"
        }
    }
]

console.table(tasks);

// Usado para exibir a data de hoje
let hoje = new Date();
console.log(hoje);

let amanha = new Date("03-18-2026");
console.log(amanha);

// Expressões regulares são utilizadas para validar e extrair padrões em strings
let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // true

console.log(Number("42"));
console.log("42");

console.log(parseFloat("42.1"));
console.log("42.1");

console.log(Boolean("texto"));
console.log(Boolean());


let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 resto da divisão
console.log(a ** b); // 1000

let contador1 = 0;
let contador2 = 0;

console.log(++contador1) // Incrementa e depois mostra
console.log(++contador1) // Incrementa e depois mostra

console.log(contador2++)// mostra e depois incrementa
console.log(contador2++)// mostra e depois incrementa

let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0 resto da divisão
x **= 3; // x = 0 (0 elevado a 3)

console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo (String, Int, Float, Boolean))
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)