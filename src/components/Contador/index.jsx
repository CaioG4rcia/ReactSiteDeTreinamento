import React, { useState } from "react"; // Importe useState

function Contador() {
  const [contador, setContador] = useState(0); // Estado para o contador

  const aumentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    setContador(contador - 1);
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
      <h3>Contador: **{contador}**</h3>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  );
}

export default Contador;
