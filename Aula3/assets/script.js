// **let idade = 18;**

// Operador ternário
// Declaro a variável, coloco a condição, ? (se atender a condição), : (se não atender)
// **let status = idade >= 18 ?** 
// **"Maior de idade" : "Menor de idade"**

// console.log(idade + " " + status)

// Coalescência nula
let valor = null
// Se o valor é nulo ou undefined ?? ele executa a ação
// Se não, ele exibe o valor definido anteriormente
let resultado = valor ?? "valor padrão"
console.log(resultado)

let a = 5, b = 10;

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)

let idade = 18;
let temCarteira = true;

if (idade >= 18 && temCarteira){
    console.log("Pode dirigir");
}

if (idade < 18 || !temCarteira){
    console.log("Não pode Dirigir");
}

if(!temCarteira){
    console.log("Precisa de Carteira")
}

if(idade < 18){
    console.log("Menor de idade");
}

let tarefaConcluida = true;

if (tarefaConcluida) {
  console.log("A tarefa está concluída!");
}

let prioridade = 2; // 1: baixa, 2: média, 3: alta

if (prioridade === 1) {
  console.log("Prioridade Baixa");
} else if (prioridade === 2) {
  console.log("Prioridade Média");
} else if (prioridade === 3) {
  console.log("Prioridade Alta");
} else {
  console.log("Prioridade desconhecida");
}

// Switch e case
let diaSemana = new Date().getDay(); // getDay(retorna o dia da semana em número 0-domingo 6-sábado)

switch (diaSemana) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;            
    default:
        console.log("Dia inválido")
        break;
}

// Laço FOR

for(let i = 0; i <= 5; i++){
    console.log("Contagem(for): ",i)
}

// Laco WHILE, ele executa o bloco enquanto a condição (no caso, contador < 5) for verdadeira

let contador = 0;

while (contador < 6){
    console.log("Contador(while): ",contador);
    contador++;
}


// Laço DO/WHILE, ele executa o bloco ao menos uma vez antes de verificar a condição
let numero = 5;

do{
    console.log("Número é: ",numero)
    numero--;
} while(numero > 0)



// Ex. 1
// Use um for para exibir apenas os números pares de 1 a 10 no console.

for(let i = 0; i <= 10; i += 2){
    console.log(i)
}

// Ex. 8
// Crie um programa que gere a tabuada de um número usando diferentes tipos de loops. Compare os resultados.
let val = 8

for(let i = 0; i <= 10; i++){
    tabuada = val * i;
    // console.log(val, " X ", i, " = ", tabuada)
    console.log(`${val} X ${i} = ${tabuada}`);
}