import React from "react";
import "./button.css"

export default function Button({ title = "", icon, onclick, ...others }) {
  return (
    <div {...others}>
      <button className="btn" title={title} onClick={onclick}>
        {icon && <i className={icon}></i>}
        <span> </span>
        {title}
      </button>
    </div>
  );
}
