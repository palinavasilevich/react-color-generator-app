import React, { useState } from "react";

const Form = ({ changeColor }) => {
  const [color, setColor] = useState("#f15025");

  const handleSubmit = (e) => {
    e.preventDefault();
    changeColor(color);
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
