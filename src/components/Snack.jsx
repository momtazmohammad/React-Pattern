import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Snack({
  msg,
  open,
  setCloseSnack,
  duration,
  severity,
  ...others
}) {
  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setCloseSnack();
      }, duration);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [open]);
  const bgcolor = (type) => {
    switch (type) {
      case "error":
        return "#FF3333";
      case "success":
        return "#00cc66";
      case "info":
        return "blue";
    }
  };
  return (
    <div {...others}>
      <div
        className="snack"
        style={{
          backgroundColor: bgcolor(severity),
          display: open ? "block" : "none",
        }}
      >
        <span className="closebtn" onClick={setCloseSnack}>
          &times;
        </span>
        {msg}
      </div>
    </div>
  );
}
