// function nome(nome){
//     console.log(nome)
// }

// nome("Arthur")

// function exibirTarefa(id, titulo, prioridade){
//     console.log(`Tarefa ${id}: ${titulo} (Prioridade ${prioridade})`);
// }

// exibirTarefa(1, "Estudar Java", "Máxima");
// exibirTarefa(2, "Estudar Python", "Média");

// function criarTarefa(titulo, descricao = "Sem descrição", // Valor padrão de descrição = "sem descrição"
//                      prioridade = "média", concluida = false) {
//   return {
//     id: Date.now(), // Gera um ID único com base no timestamp
//     titulo,
//     descricao,
//     prioridade,
//     concluida,
//     criada: new Date()
//   };
// }

// const tarefa = criarTarefa("Estudar funções");
// console.log(tarefa);


// Função que calcula estatísticas básicas de um array de números
function calcularEstatisticas(numeros) {
  let soma = 0;
  let min = numeros[0];
  let max = numeros[0];
  
  // Itera pelo array para acumular a soma e atualizar os valores de min e max
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  const media = soma / numeros.length;
  
  // Retorna os resultados em um objeto
  return { soma, media, min, max };
}

const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);
console.log(resultados);


// Função para formatar uma data no formato "DD/MM/AAAA"
function formatarData(data, formato = 'curto') {
  // Converte para objeto Date, se necessário
  if (!(data instanceof Date)) {
    data = new Date(data);
  }
  // Verifica se a data é válida
  if (isNaN(data.getTime())) {
    return "Data inválida";
  }
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  
  if (formato === 'curto') {
    return `${dia}/${mes}/${ano}`;
  }
  // Outros formatos podem ser implementados aqui...
  return `${dia}/${mes}/${ano}`;
}
console.log("Data formatada:", formatarData(new Date()));
// ***************************************************************

// Demonstração de "this" em função tradicional vs. arrow function
const contador = {
  valor: 0,
  incrementarTradicional: function() {
    setTimeout(function() {
      // Neste caso, "this" não se refere ao objeto "contador"
      console.log("Valor (tradicional):", this.valor);
    }, 100);
  },
  incrementarArrow: function() {
    setTimeout(() => {
      // A arrow function preserva o contexto do objeto "contador"
      this.valor++;
      console.log("Valor (arrow):", this.valor);
    }, 100);
  }
};
contador.incrementarTradicional();
contador.incrementarArrow();