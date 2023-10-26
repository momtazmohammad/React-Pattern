import React from "react";

export default function Icon({ title = "", icon, onclick, ...others }) {
  return (
    <div {...others}>
      <button title={title} onClick={onclick} style={{backgroundColor:"inherit"}}>
        {icon && <i className={icon}></i>}
      </button>
    </div>
  );
}
