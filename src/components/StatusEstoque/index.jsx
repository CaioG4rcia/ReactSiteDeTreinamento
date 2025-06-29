import React from "react";

function StatusEstoque({ nomeProduto, emEstoque }) {
  const statusColor = emEstoque ? "darkgreen" : "darkred";
  const statusText = emEstoque ? "Em estoque" : "Fora de estoque";

  const itemStyle = {
    borderBottom: "1px dashed #ccc",
    padding: "8px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={itemStyle}>
      <span>**{nomeProduto}**:</span>
      <span style={{ color: statusColor, fontWeight: "bold" }}>
        {statusText}
      </span>
    </div>
  );
}

export default StatusEstoque;
