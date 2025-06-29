import React from "react";

function SaudacaoCondicional({ logado }) {
  const messageStyle = {
    fontWeight: "bold",
    fontSize: "1.1em",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div
      style={{
        border: "1px solid #17a2b8",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#e0f7fa",
      }}
    >
      <h3>Condicional de Login</h3>
      {logado ? (
        <p style={{ ...messageStyle, color: "green" }}>Bem-vindo, usuário!</p>
      ) : (
        <p style={{ ...messageStyle, color: "red" }}>
          Acesso negado. Por favor, faça login.
        </p>
      )}
    </div>
  );
}

export default SaudacaoCondicional;
