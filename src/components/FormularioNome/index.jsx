import React, { useState } from "react";

function FormularioNome() {
  const [nome, setNome] = useState("");
  const [nomeSalvo, setNomeSalvo] = useState("");

  const handleChange = (event) => {
    setNome(event.target.value); // Atualiza o estado 'nome' conforme o usuário digita
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
    setNomeSalvo(nome); // Salva o nome digitado no estado 'nomeSalvo'
    setNome(""); // Limpa o campo de input após o envio
  };

  const formStyle = {
    border: "1px solid #007bff",
    padding: "20px",
    margin: "10px auto", // Centraliza o formulário
    borderRadius: "8px",
    backgroundColor: "#e6f7ff",
    maxWidth: "400px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "calc(100% - 120px)", // Ajusta largura para caber botão ao lado da label
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={formStyle}>
      <h3>Formulário de Nome Simples</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Digite seu nome"
            required
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Salvar
        </button>
      </form>
      {nomeSalvo && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Nome digitado: **{nomeSalvo}**
        </p>
      )}
    </div>
  );
}

export default FormularioNome;
