import React from "react";

export default function Container({data,fields,closeDlg}) {  
  return (
    <div style={{overflowX: "auto"}}>      
      <table  style={{ borderCollapse: "collapse", tableLayout:"fixed",width:"100%"}} >
        <thead>
          <tr>
            {fields?.map((field, i) => {
                return <th style={field?.width?{width:field.width}:{}} className="table-th" key={i} >{field.title}</th>;
            })}
          </tr>
          </thead>
          <tbody className="row-hover">
          {data?.map((item, i) => {            
            return (
            <tr  key={i} onDoubleClick={()=>closeDlg(item)}>
              {fields?.map((field, index) => {
                  return <td className="table-td" key={index} >{item[field.fieldName]}</td>;                
              })}
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}
