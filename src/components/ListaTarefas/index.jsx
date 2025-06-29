import React, { useState } from "react"; // Importe useState

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Configurar ambiente de desenvolvimento" },
    { id: 2, texto: "Implementar todos os componentes React" },
    { id: 3, texto: "Revisar conceitos de Hooks" },
  ]);

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id)); // Remove a tarefa pelo ID
  };

  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px dashed #eee",
  };

  const removeButtonStyle = {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "10px",
    fontSize: "0.9em",
  };

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
      <h3>Lista de Tarefas com Remover</h3>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} style={listItemStyle}>
            {tarefa.texto}
            <button
              onClick={() => removerTarefa(tarefa.id)}
              style={removeButtonStyle}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      {tarefas.length === 0 && (
        <p style={{ textAlign: "center", color: "#666" }}>
          Todas as tarefas concluídas!
        </p>
      )}
    </div>
  );
}

export default ListaTarefas;
