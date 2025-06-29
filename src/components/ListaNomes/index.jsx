import React from "react";

function ListaNomes({ nomes }) {
  const listStyle = {
    listStyleType: "decimal", // Numerado
    paddingLeft: "20px",
  };
  const listItemStyle = {
    marginBottom: "5px",
  };

  return (
    <div
      style={{
        border: "1px solid #6c757d",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#f0f2f5",
      }}
    >
      <h3>Lista de Nomes (Array de Strings)</h3>
      <ul style={listStyle}>
        {nomes.map((nome, index) => (
          <li key={index} style={listItemStyle}>
            **{nome}**
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNomes;
