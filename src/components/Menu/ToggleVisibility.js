import React, { useState } from "react";

export default function ToggleVisibility({ children }) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide Component" : "Show Component";

  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}
