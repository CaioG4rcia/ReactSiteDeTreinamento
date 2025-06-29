import React from "react";

function Rodape() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "15px 0",
    textAlign: "center",
    marginTop: "40px",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
    </footer>
  );
}

export default Rodape;
