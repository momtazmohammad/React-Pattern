import React from "react";
import "./index.css"

export default function Dialog({ open, onClose, width = "500px", children }) {
  return (
    <div style={{position:"relative"}}>
      {open && (
        <div style={{ width: `${width}` }} className="dialog-form" onClick={() => onClose()}>          
          <div            
            className="dialog-form-content"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
