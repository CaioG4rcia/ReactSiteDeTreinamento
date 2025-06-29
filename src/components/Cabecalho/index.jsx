import React from "react";

function Cabecalho() {
  const headerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "15px 0",
    textAlign: "center",
    marginBottom: "20px",
  };

  return (
    <header style={headerStyle}>
      <h1>Minha Aplicação Incrível</h1>
    </header>
  );
}

export default Cabecalho;
