import React from "react";

function Produto({ nome, preco }) {
  const produtoStyle = {
    border: "1px solid #28a745",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "#e9f7ed",
    display: "inline-block",
    maxWidth: "280px",
    verticalAlign: "top",
  };
  const precoStyle = {
    fontWeight: "bold",
    color: "#28a745",
    fontSize: "1.2em",
  };

  return (
    <div style={produtoStyle}>
      <h3>{nome}</h3>
      <p style={precoStyle}>R$ {preco.toFixed(2)}</p>
    </div>
  );
}

export default Produto;
