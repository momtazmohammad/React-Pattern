import React from "react";
import "./modal.css"

export default function Modal({ open, onClose, width = "50%", children }) {
  return (
    <>
      {open && (
        <div className="modal" onClick={() => onClose()}>
          <div
            style={{ width: `${width}` }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
