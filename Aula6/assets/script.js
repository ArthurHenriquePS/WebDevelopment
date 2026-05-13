// Array literal (forma mais comum)
// const tarefas = [
//   "Estudar JavaScript",
//   "Criar projeto TaskMaster",
//   "Preparar apresentação",
//   "Revisar código"
// ];
// console.log("Array de tarefas:", tarefas);

// // pegar o primeiro item da array
// console.log(tarefas[0]);
// // pegar o último item da arrray
// console.log(tarefas.length - 1);


// const nomes = ["Daniel"]
// // Altera o valor do primeiro item da array
// nomes[0] = ["Matheus"]
// console.log(nomes)

// // Adiciona por último o item na array
// nomes.push("Daniel")
// console.log(nomes)

// nomes.push("Sem nome")
// console.log(nomes)
// // Apaga o último valor da array
// nomes.pop()

// // Adiciona o primeiro item da array
// nomes.unshift("Gabriel")
// console.log(nomes)

// // Apaga o primeiro item da array
// nomes.shift()
// console.log(nomes)

// nomes.push("André");
// nomes.push("Socrates");
// nomes.push("Anna");
// nomes.push("João");
// nomes.push("Maicão");
// nomes.push("Maicão");

// console.log(nomes);

// // Remove o item de sua posição determinada
// nomes.splice(2, 1); // Índice do item , quantidade
// nomes.splice(2, 1, "Josefina"); // Índice do item , quantidade, troca

// // Percorre a lista com um loop até o final da array (Altera a array)
// nomes.forEach((t, i) => {
//     console.log(`${i+1}.${t}`)
// })

// //  Percorre a lista com um loop até o final da array (Cria uma nova)
// const nomesComMaiusculo = nomes.map(t => t.toUpperCase())

// console.log(nomesComMaiusculo)


// // Percorre a lista com um loop e pega apenas os elementos determinados
// const nomesComE = nomes.filter(t => t.toLowerCase().includes("e"))

// console.log(nomesComE)

// // Percorre a lista com um loop e pega apenas o primeiro elemento determinado
// const nomesComA = nomes.find(t => t.toLowerCase().includes("a"))

// console.log(nomesComA)

// // Percorre a lista com um loop e pega apenas o primeiro elemento determinado (somente o índex)
// const indiceNomesComM = nomes.findIndex(t => t.toLowerCase().includes("m"))

// console.log(indiceNomesComM)

// const somaComprimentos = nomes.reduce((total, t)=> total + t.length, 0)

// console.log(somaComprimentos)

// const tarefa = {
//   id: 1,
//   titulo: "Aprender sobre objetos",
//   descricao: "Estudar propriedades e métodos",
//   concluida: false,
//   prioridade: "alta",
//   dataCriacao: new Date()
// };

// // Exibe tudo
// console.log(tarefa)
// // Exibe o objeto da chave
// console.log(tarefa.titulo)
// console.log(tarefa["titulo"])

const projetoTaskMaster = {
  nome: "TaskMaster",
  version: "1.0",
  autor: "Curso JavaScript",
  tarefas: [],
  adicionarTarefa(titulo, prioridade = "média") {
    const novaTarefa = {
      id: this.tarefas.length + 1,
      titulo,
      prioridade,
      concluida: false,
      criada: new Date()
    };
    this.tarefas.push(novaTarefa);
    console.log(`Tarefa "${titulo}" adicionada.`);
    return novaTarefa;
  },
  listarTarefas() {
    console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
    this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
  }
};

console.log(projetoTaskMaster.tarefas)
console.log(projetoTaskMaster.adicionarTarefa("Estudar JavaScript", "Alta"))

const tarefa = {
  id: 1,
  titulo: "Aprender sobre objetos",
  descricao: "Estudar propriedades e métodos",
  concluida: false,
  prioridade: "alta",
  dataCriacao: new Date()
};


// Laço de repetição com objeto
for(let prop in tarefa){
    console.log(`${prop}: ${tarefa[prop]}`)
}

// Exibe apenas as chaves do dicionário
console.log(Object.keys(tarefa))
// Exibe apenas os objetos do dicionário
console.log(Object.values(tarefa))


// DESESTRUTURAÇÃO 

const prioridades = ["baixa", "media", "alta"]

const [baixa, media, alta] = prioridades
// const baixa = prioridades[0]
// const media = prioridades[1]
// const alta = prioridades[2]


// Spread Operator (Cria uma cópia, mas não pega os elementos adicionados após a criação do primeiro)
const prioridades1 = ["b", "m", "a"]
const prioridades2 = [...prioridades1]