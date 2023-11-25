import React, { useState } from "react";
import "./index.css";

export default function Dialog({ open, onClose, width = 500, children }) {
  return (
    <div>
      {open && (
        <>
          <div
            className="dlg-container"
            style={{ width: `${width}px` }}
            onClick={() => onClose()}
          >
            <div
              className="dlg-form-content"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
