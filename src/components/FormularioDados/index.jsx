import React, { useState } from "react";

function FormularioDados() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Pega o 'name' e 'value' do input que mudou
    setFormData((prevState) => ({
      ...prevState, // Mantém os outros campos do estado
      [name]: value, // Atualiza apenas o campo que mudou
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    console.log("Dados do Formulário:", formData); // Exibe os dados no console do navegador
    alert(`Dados enviados!\nNome: ${formData.nome}\nEmail: ${formData.email}`); // Exibe em um alerta na tela
    // Opcional: Limpar formulário após envio
    setFormData({ nome: "", email: "" });
  };

  const formContainerStyle = {
    border: "1px solid #28a745",
    padding: "20px",
    margin: "10px auto", // Centraliza o formulário
    borderRadius: "8px",
    backgroundColor: "#e9f7ed",
    maxWidth: "400px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const inputGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box", // Inclui padding e borda na largura total
  };

  const buttonStyle = {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%", // Botão ocupa a largura total
  };

  return (
    <div style={formContainerStyle}>
      <h3>Formulário de Nome e Email</h3>
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label htmlFor="nome" style={labelStyle}>
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Seu nome completo"
            required
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="seu.email@example.com"
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Enviar Dados
        </button>
      </form>
    </div>
  );
}

export default FormularioDados;
