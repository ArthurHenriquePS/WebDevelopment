// Precisa para manipular o front-end
'use client'

// O que é Props?
// Abreviação de properties. É como você manda a informação de fora para
// dentro de um componente - parecido com passar um 
// ingrediente para uma receita

function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}

export default function Home() {
  const nome = "Ana";
  const pontos = 1;
  const ponto = 0;

  const ativo = true;
  const estilo = { padding: '8px', borderRadius: '6px' };

  const url = "https://react.dev";
  const contagem = 3;

  // Criando uma função para gerar botão HTML e tag texto="" para colocar o 
  // texto do botão
  const Botao = ({ texto }) => <button>{texto}</button>

  const BotaoGrande = ({ texto, ligado }) => {
    return <button className={ligado ? "btn btl-lg btn-primary" : "btn btn-lg btn-outline"}>{texto}</button>
  }

  // ...rest = usado para inserir todas os componentes de uma variável
  // Children: é um prop esecial que representa ***tudo que você
  // colocou entre as tags de abertura e fechamento** de um componente
  const Alerta = ({ tipo = 'info', children, ...rest }) => {
    const classe = `alert alert-${tipo}`;
    return <div className={classe} {...rest}>{children}</div>;
  };

  const nomes = ['Maria', 'João', 'Aline'];

  const BotaoAcao = ({ onAcao, children }) => (
    <button onClick={onAcao}>{children}</button>
  );
  const dizerOi = () => alert('Oi!');

  return (
    <>
      <div>
        {/* {className = define uma classe no JSX} */}
        <h1 onClick="" className="">Welcome to the real world! {nome}</h1>
      </div>
      <p>
        {/* Isto exibirá 0 na tela */}
        {pontos && 'Você tem pontos'}
      </p>

      <p>
        {/* Melhor: evita mostrar 0 */}
        {ponto > 0 ? 'Você tem pontos' : null}
      </p>

      <button
        style={estilo}
        className={ativo ? 'btn btn-primary' : 'btn btn-outline'}
      >
        Botão
      </button>
      <br />
      <a href="https://react.dev" target="_blank" rel="noreferrer">Site</a>
      <p>Você tem {contagem} novas mensagens</p>
      <Botao texto="Rola"></Botao>
      <br />
      <br />
      <BotaoGrande texto="Continuar" ligado={false}></BotaoGrande>
      <br />
      <br />
      <Alerta tipo="warning" id="aviso">Cuidado!</Alerta>
      <Alerta>Mensagem informativa</Alerta>
      <br />
      <br />
      <Saudacao nome="Maria" dia="essa manhã" />
      <Saudacao /> {/* Visitante, hoje */}
      {nomes.map(n => <Saudacao key={n} nome={n} dia="agora" />)}
      <br />
      <br />
      <BotaoAcao onAcao={dizerOi} >Clique</BotaoAcao>
    </>
  );
}
