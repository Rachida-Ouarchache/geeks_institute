import React, { Component } from "react";
import "./exercice.css";

class Exercise extends Component {
render() {
  const style_header = {
    color: "black",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Header */}
      <h1 style={style_header}>This is a Header</h1>

      {/* Paragraph */}
      <p className="para">This is a Paragraph</p>

      {/* Link */}
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        This is a Link
      </a>

      {/* Form */}
      <h3>This is a Form:</h3>
      <form>
        <label>Enter your name:</label><br />
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>

      {/* Image */}
      <h3>Here is an Image:</h3>
      <img
        src="https://blog.digitize-info.com/wp-content/uploads/2023/06/JavaScript-React-Js-Framework-Digitize-Info-Syatem-e1686228233904-1024x683.jpg"
        alt="React Logo"
        width="700"
      />

      {/* List */}
      <h3>This is a List:</h3>
      <ul style={{ listStyleType: "disc", display: "inline-block", textAlign: "left" }}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  );
}
}
export default Exercise;
