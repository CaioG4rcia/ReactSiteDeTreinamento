import React from "react";

function BotaoAlerta() {
  const handleClick = () => {
    alert("Botão clicado! Você ativou um evento.");
  };

  return (
    <button onClick={handleClick} style={{ margin: "10px" }}>
      Clique para Alerta
    </button>
  );
}

export default BotaoAlerta;
