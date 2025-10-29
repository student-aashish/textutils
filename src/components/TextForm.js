import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

   useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      #myBox::placeholder {
        color: ${props.mode === "dark" ? "#d3d3d3" : "#555"};
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [props.mode]);


  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text here..."
            style={{
              backgroundColor: props.mode === "dark" ? "#0b3d91" : "#f8f9fa",
              color: props.mode === "dark" ? "white" : "black",
              border: props.mode === "dark" ? "2px solid #5dade2" : "2px solid #0d69fd",
              borderRadius: "8px",
              padding: "10px",
              transition:"all 0.3s ease-in-out",
             
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length !==0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text to preview here"}</p>
      </div>
    </>
  );
}