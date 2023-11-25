import React, { useState, useEffect, useRef } from "react";
import "./index.css";

export default function DialogResizable({
  open,
  onClose,
  width = 500,
  children,
}) {
  const dlgRef = useRef(null);
  const [drag, setDrag] = useState({
    active: false,
    x: "",
    y: "",
  });

  const [dims, setDims] = useState({
    w: width,
    h: dlgRef.current?.clientHeight ,
  });

  const boxStyle = {
    width: `${dims.w}px`,
    height: `${dims.h}px`,
  };

  const startResize = (e) => {
    setDrag({
      active: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const resizeFrame = (e) => {
    const { active, x, y } = drag;
    if (active) {
      const xDiff = Math.abs(x - e.clientX);
      const yDiff = Math.abs(y - e.clientY);
      const newW = x > e.clientX ? dims.w - xDiff : dims.w + xDiff;
      const newH = y > e.clientY ? dims.h + yDiff : dims.h - yDiff;

      setDrag({ ...drag, x: e.clientX, y: e.clientY });
      setDims({ w: newW, h: newH });
    }
  };

  const stopResize = (e) => {
    setDrag({ ...drag, active: false });
  };

  return (
    <div>
      {open && (
        <>
          <div
            className="dlg-container"
            onMouseMove={resizeFrame}
            onMouseUp={stopResize}
          >
              <div ref={dlgRef} style={boxStyle}              >
                <div
                  className="dlg-form-content"                  
                >
                  {children}
                  
                </div>
                <div style={{ position:"relative",bottom:"25px" ,display:"flex",flexDirection:"row-reverse"}}>
                  <button className="dlg-dragger" onMouseDown={startResize}>
                    <i className="fa  fa-arrows-alt"></i>
                  </button>
                </div>
              </div>
            </div>
        </>
      )}
    </div>
  );
}
