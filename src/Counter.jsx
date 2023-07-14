import React, { useState } from "react";

const Counter = () => {
  const [sayac, setSayac] = useState(0);
  return (
    <div>
      <h1>Sayac</h1>
      <button
        onClick={() => setSayac(sayac + 1)}
        style={{ padding: "8px 12px", borderRadius: "5px" }}>
        Arttır
      </button>
      <span style={{ fontSize: "22px" }} data-testid="sayac-alanı">
        {sayac}
      </span>
      <button
        onClick={() => setSayac(sayac - 1)}
        style={{ padding: "8px 12px", borderRadius: "5px" }}>
        Azalt
      </button>
    </div>
  );
};

export default Counter;
