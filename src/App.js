import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [btnColor, setBtnColor] = useState("pink");
  return (
    <div className="App">
      <h2>Test Linki</h2>
      <br />
      <br />
      <button
        disabled={isChecked}
        style={{
          backgroundColor: btnColor,
          padding: "5px 10px",
          border: "none",
          fontSize: "16px",
          borderRadius: "5px",
        }}
        onClick={() => setBtnColor(btnColor === "pink" ? "#61dafb" : "pink")}>
        Change to {btnColor === "pink" ? "blue" : "pink"}
      </button>
      <input
        type="checkbox"
        name=""
        id=""
        onClick={() => setIsChecked(!isChecked)}
      />
      <label htmlFor=""> Disable Button </label>
      <Counter />
    </div>
  );
}
export default App;
