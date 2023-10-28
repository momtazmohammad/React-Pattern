import React from "react";
import { useState } from "react";
import "./index.css";

export default function DropDown({
  items,
  dropDownwidth = "400px",
  selectColor = "#bbb",
  selected,
  onSelect,
  placeHolder = "Please select an item",
}) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isHovering, setIsHovering] = useState(0);

  return (
    <div style={{ width: dropDownwidth }}>
      <div
        style={{
          border: `${openDropDown ? "1px solid #aaa" : "1px solid #666"}`,
          borderRadius: "4px",
        }}
        className="dropDownSelect"
        onClick={() => setOpenDropDown((cur) => !cur)}
      >
        <div style={{ margin: "10px 5px 10px 20px" }}>
          {selected ? selected.title : placeHolder}
          <i style={{ float: "right" }} className="fa fa-angle-down"></i>
        </div>
      </div>
      <div
        className="dropDownList"
        style={{
          width: dropDownwidth,
          display: `${openDropDown ? "block" : "none"}`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="dropDown">
            <button
              style={{
                width: dropDownwidth,
                backgroundColor: isHovering == index ? selectColor : "#eee",
              }}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(0)}
              onClick={() => {
                onSelect(item);
                setOpenDropDown(false);
              }}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
