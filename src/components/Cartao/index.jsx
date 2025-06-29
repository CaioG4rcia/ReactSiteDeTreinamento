import React from "react";

function Cartao({ titulo, conteudo }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    maxWidth: "300px",
    display: "inline-block", // Para que os cartões fiquem lado a lado
    verticalAlign: "top",
  };

  const titleStyle = {
    color: "#007bff",
    marginBottom: "10px",
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{titulo}</h3>
      <p>{conteudo}</p>
    </div>
  );
}

export default Cartao;
