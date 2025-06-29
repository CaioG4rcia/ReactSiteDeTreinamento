import React from "react";

function Perfil({ nome, idade, profissao }) {
  const perfilStyle = {
    border: "1px dashed #007bff",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "#e6f7ff",
    display: "inline-block",
    maxWidth: "280px",
    verticalAlign: "top",
  };

  return (
    <div style={perfilStyle}>
      <h3>{nome}</h3>
      <p>Idade: **{idade}** anos</p>
      <p>Profissão: **{profissao}**</p>
    </div>
  );
}

export default Perfil;
