import React, { useState } from 'react';
import './colorpicker.css';

const ColorPicker = () => {
  const initialColors = ["red", "green", "blue", "yellow"];
  const [selectedColor, setSelectedColor] = useState("");
  const [colors, setColors] = useState(initialColors);
  const [customColor, setCustomColor] = useState("");
 const [errorMessage, setErrorMessage] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
    setErrorMessage("");
  };

  const addCustomColor = () => {
    const isColorValid = /^#[0-9A-Fa-f]{6}$|^[a-zA-Z]+$/.test(customColor);
    if (!isColorValid) {
      setErrorMessage("Please enter a valid color name or hex code.");
      return;
    }

    if (colors.includes(customColor)) {
      setErrorMessage("This color already exists.");
      return;
    }

    setColors([...colors, customColor]);
    setCustomColor("");
  };

  return (
    <div className="color-picker-container">
      <h2>Color Picker</h2>

      <div
        className="color-display-box"
        style={{ backgroundColor: selectedColor || "white" }}
      >
        <span>{selectedColor ? selectedColor : "Pick a Color"}</span>
      </div>

      {colors.map((color) => (
        <button
          key={color}
          onClick={() => handleColorChange(color)}
          className="color-button"
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}

      <div className="custom-color-container">
        <input
          type="text"
          value={customColor}
          onChange={handleCustomColorChange}
          placeholder="Enter a color or hex code"
          className="custom-color-input"
        />
        <button onClick={addCustomColor} className="add-color-button">
          Add Color
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ColorPicker;