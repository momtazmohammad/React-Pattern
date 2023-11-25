import React from "react";
import { FixedSizeList as List } from "react-window";

export default function ContainerVirtualize({ data, fields, closeDlg }) {
  const Row = ({ index, style }) => (
    <div
      style={style}
      className="list-row"
      key={index}
      onDoubleClick={() => closeDlg(data[index])}
    >
      {fields?.map((field, i) => {
        return <span key={i}>{data[index][field.fieldName]} , </span>;
      })}
    </div>
  );

  return (
    <div style={{ overflowX: "auto" }}>
      <List
        className="List"
        height={150}
        itemCount={data?.length}
        itemSize={35}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
}
