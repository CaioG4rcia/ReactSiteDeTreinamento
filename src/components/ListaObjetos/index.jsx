import React from "react";
import Cartao from "../Cartao"; // Reutilizando o componente Cartao

function ListaObjetos({ dados }) {
  return (
    <div
      style={{
        border: "1px solid #007bff",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#e6f7ff",
      }}
    >
      <h3>Lista de Pessoas (Objetos em Cards)</h3>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {dados.map((pessoa) => (
          <Cartao
            key={pessoa.id}
            titulo={pessoa.nome}
            conteudo={`Idade: ${pessoa.idade} anos`}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaObjetos;
