import React, { useContext } from "react";
import Switch from "../switch/Switch";
import Dialog from "./Dialog";
import DataContext from './DataContext'

export default function Columns({ onchange, openDlg, setOpenDlg }) {    
  const {fields}=useContext(DataContext)
  return (
    <div >
      <Dialog  width="500px" open={openDlg} onClose={() => setOpenDlg(false)}>
      <div style={{ fontWeight:"bold", textAlign:"center"}}>آنتخاب ستونهاي گزارش</div>
      <div style={{borderTop:"1px solid", width:"100%" ,margin:"10px 0px"}}></div>
        {fields?.map(field => (
          <div key={field.fieldName} style={{display:"flex", flexDirection:"row-reverse"}}>
            <Switch
            round={true}
              style={{ margin: "5px" }}
              checked={field.show}
              onchange={() => onchange({ fieldName:field.fieldName, type: "show" })}
            />            
                        <div style={{fontWeight:"bold",margin:"auto 5px"}}>{field.title} </div>
          </div>
        ))}
      </Dialog>
    </div>
  );
} 
