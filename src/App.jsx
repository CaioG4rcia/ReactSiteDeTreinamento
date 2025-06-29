import "./assets/styles/App.css";
import Saudacao from "./components/Saudacao";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Cartao from "./components/Cartao";
import Perfil from "./components/Perfil";
import Produto from "./components/Produto";
import BotaoAlerta from "./components/BotaoAlerta";
import Contador from "./components/Contador";
import ToggleStatus from "./components/ToggleStatus";
import SaudacaoCondicional from "./components/SaudacaoCondicional";
import StatusEstoque from "./components/StatusEstoque";
import ListaNomes from "./components/ListaNomes";
import ListaObjetos from "./components/ListaObjetos";
import ListaTarefas from "./components/ListaTarefas";
import FormularioNome from "./components/FormularioNome"; // Importe FormularioNome
import FormularioDados from "./components/FormularioDados"; // Importe FormularioDados

function App() {
  const meuNome = "Seu Nome Completo";
  const descricao = "Estudante de desenvolvimento web com paixão por React.";
  const hobbies = ["Programar", "Caminhar", "Ler ficção científica"];
  const estaLogado = true;

  const produtosInventario = [
    { id: 1, nome: "Smartphone X", disponivel: true },
    { id: 2, nome: "Fone Bluetooth", disponivel: false },
    { id: 3, nome: "Câmera Digital", disponivel: true },
    { id: 4, nome: "Smartwatch", disponivel: false },
  ];

  const nomesParaLista = ["Mariana", "Ricardo", "Fernanda", "Gustavo"];
  const pessoasParaLista = [
    { id: 101, nome: "Lúcia Santos", idade: 45 },
    { id: 102, nome: "Marcos Lima", idade: 30 },
    { id: 103, nome: "Sofia Almeida", idade: 22 },
  ];

  return (
    <div className="App">
      <Cabecalho />

      <section>
        <h1>Olá, React!</h1>
        <Saudacao nome="Desenvolvedor" />
      </section>

      <section>
        <h2>🟨 JSX e Render HTML</h2>
        <h3>Meu Perfil Pessoal</h3>
        <p>Meu nome é: **{meuNome}**</p>
        <p>{descricao}</p>
        <h4>Meus Hobbies:</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🔵 React Components</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Cartao
            titulo="Componente Reutilizável"
            conteudo="Este é um card criado com um componente."
          />
          <Cartao
            titulo="Card de Informação"
            conteudo="Pode ser usado para exibir diferentes tipos de conteúdo."
          />
        </div>
      </section>

      <section>
        <h2>🟠 Props</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Perfil
            nome="Ana Paula"
            idade={28}
            profissao="Desenvolvedora Front-end"
          />
          <Perfil
            nome="Carlos Eduardo"
            idade={35}
            profissao="Gerente de Projetos"
          />
          <Produto nome="Monitor Ultrawide" preco={1200.5} />
          <Produto nome="Webcam Full HD" preco={189.99} />
        </div>
      </section>

      <section>
        <h2>🟣 Events</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BotaoAlerta />
          <Contador />
          <ToggleStatus />
        </div>
      </section>

      <section>
        <h2>🟢 Conditionals</h2>
        <SaudacaoCondicional logado={estaLogado} />

        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <h4>Verificar Estoque de Produtos:</h4>
          {produtosInventario.map((produto) => (
            <StatusEstoque
              key={produto.id}
              nomeProduto={produto.nome}
              emEstoque={produto.disponivel}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>🟡 Lists</h2>
        <ListaNomes nomes={nomesParaLista} />
        <ListaObjetos dados={pessoasParaLista} />
        <ListaTarefas />
      </section>

      <section>
        <h2>🔴 Forms</h2>
        <FormularioNome />
        <FormularioDados />
      </section>

      <Rodape />
    </div>
  );
}

export default App;
