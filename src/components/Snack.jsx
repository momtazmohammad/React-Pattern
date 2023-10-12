import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Snack({
  msg,
  openSnack,
  setOpenSnack,
  duration,
  severity,
  ...others
}) {
  useEffect(() => {
    let timer;
    if (openSnack) {
      timer = setTimeout(() => {
        setOpenSnack(false);
      }, duration);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [openSnack]);
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
          display: openSnack ? "block" : "none",
        }}
      >
        <span className="closebtn" onClick={() => setOpenSnack(false)}>
          &times;
        </span>
        {msg}
      </div>
    </div>
  );
}
