import React, { useState } from "react";

// Também podemos realizar desestruturação do JS nas props
// ou simplesmente function Contador(props)
// Children props equivale a tudo aquilo que é passado dentro da abertura
// da tag HTML

function Contador({ text, children }) {
  // Declaração de states e variáveis
  let [contador, setContador] = useState(0);
  // Declaração de funções
  const handleClick = () => {
    setContador((contador += 1));
  };
  // Componente JSX a ser retornado
  return (
    <div>
      <h1>Você clicou {contador} vezes!</h1>
      <button onClick={handleClick}>{text}</button>
      <p>{children}</p>
    </div>
  );
}

export default Contador;
