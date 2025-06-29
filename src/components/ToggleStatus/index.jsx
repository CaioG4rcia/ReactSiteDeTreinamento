import React, { useState } from "react"; // Importe useState

function ToggleStatus() {
  const [isLigado, setIsLigado] = useState(false); // Estado para o status

  const toggle = () => {
    setIsLigado(!isLigado); // Inverte o valor do estado
  };

  const statusColor = isLigado ? "green" : "red"; // Estilo condicional

  return (
    <div
      style={{
        border: "1px solid #ffc107",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#fffbe6",
      }}
    >
      <h3>
        Status:{" "}
        <span style={{ color: statusColor, fontWeight: "bold" }}>
          {isLigado ? "Ligado" : "Desligado"}
        </span>
      </h3>
      <button
        onClick={toggle}
        style={{ backgroundColor: "#ffc107", color: "#333" }}
      >
        Mudar Status
      </button>
    </div>
  );
}

export default ToggleStatus;
