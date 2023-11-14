import React from "react";
import "./index.css"

export default function Button({ title = "", icon, onclick, ...others }) {
  return (
    <div {...others}>
      <button  className="button-text" title={title} onClick={onclick}>
        {icon && <i className={icon}></i>}
        <span> </span>
        {title}
      </button>
    </div>
  );
}
