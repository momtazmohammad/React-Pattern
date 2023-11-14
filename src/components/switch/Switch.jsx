import React from "react";
import "./index.css"
export default function Switch({
  checked,
  onchange,
  round = false,
  ...others
}) {
  return (
    <div {...others}>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onchange} />
        <span className={`slider ${round ? "round" : ""}`}></span>
      </label>
    </div>
  );
}
