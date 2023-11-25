import React, { useState } from "react";
import "./index.css";
import Container from "./Container";
import Dialog from "../dialog/Dialog";
export default function LovDialog({
  openDlg,
  setOpenDlg,
  title = "",
  fields,
  data,
  onSelect,
}) {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState(data);
  const checkRow = (row) => {
    if (!search) return true;
    let vld = false;
    for (const fld of fields) {
      if ((row[fld?.fieldName] + "")?.includes(search)) {
        vld = true;
        break;
      }
    }
    return vld;
  };

  return (
      <Dialog width={400} open={openDlg} onClose={() => setOpenDlg(false)}>
      <span className="close-button" onClick={() => setOpenDlg(false)}>
        &times;
      </span>
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, marginBottom: "10px" }}>
          <input
            className="search-input"
            type="text"
            placeholder="Find.."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => setFilterData(data.filter((item) => checkRow(item)))}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>

        <Container
          style={{ flex: 1 }}
          data={filterData}
          fields={fields}
          closeDlg={(item) => {
            onSelect(item);
            setSearch("");
            setFilterData(data);
            setOpenDlg(false);
          }}
        />
      </div>
    </Dialog>
  );
}
