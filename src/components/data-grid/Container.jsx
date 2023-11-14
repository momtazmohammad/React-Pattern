import React, { useContext, useState } from "react";
import { filterData } from "./filterData";
import DataContext from "./DataContext";

export default function Container({reportTitle}) {
  const {fields,data}=useContext(DataContext)
  return (
    <div style={{overflowX: "auto"}}>
      <h2 className="no-screen" style={{textAlign:"center"}}>{reportTitle}</h2>
      <table  style={{ borderCollapse: "collapse", tableLayout:"fixed",width:"100%"}} >
        <thead>
          <tr>
            {fields?.map((field, i) => {
              if (field.show) {
                return <th style={field?.width?{width:field.width}:{}} className="table-th" key={i} >{field.title}</th>;
              }
            })}
          </tr>
          </thead>
          <tbody className="row-hover">
          {data?.map((item, i) => {
            if(filterData(item,fields)){
            return (
            <tr  key={i}>
              {fields?.map((field, index) => {
                if (field.show) {
                  return <td className="table-td" key={index} >{item[field.fieldName]}</td>;
                }
              })}
            </tr>
          )}})}
        </tbody>
      </table>
    </div>
  );
}
