import React, { useContext } from "react";
import Dialog from "./Dialog";
import DataContext from './DataContext'

export default function Filter({ onchange, openDlg, setOpenDlg }) {
  const {fields}=useContext(DataContext)
  return (
    <div>
      <Dialog width="700px" open={openDlg} onClose={() => setOpenDlg(false)}>
      <div style={{ fontWeight:"bold", textAlign:"center"}}>محدود كردن خروجي گزارش</div>
      <div style={{borderTop:"1px solid", width:"100%" ,margin:"10px 0px"}}></div>
      <div className="form-row" style={{display:"flex", flexDirection:"row-reverse" ,marginBottom:"10px"}}>            
          <div style={{borderBottom:"1px solid",fontWeight:"bold", textAlign:"center"}} className="form-col-25" >نام فيلد</div>
          <div style={{borderBottom:"1px solid",fontWeight:"bold", textAlign:"center"}} className="form-col-75">مقدار فيلتر</div>
</div>
        {fields.map((field,i) => (
          <div key={i} className="form-row" style={{display:"flex", flexDirection:"row-reverse" }}>            
          <div className="form-col-25" style={{fontWeight:"bold",paddingLeft:"15px", margin:"auto 5px"}}>{field.title}</div>
          <div className="form-col-75">
            <input
            style={{width:"100%",padding:"5px"}}
              value={field.filterValue}
              type="text"
              placeholder="Filter Value ..."
              onChange={({ target }) =>
                onchange({ fieldName:field.fieldName, type: "filter", value: target.value })
              }
            />            
            </div>
          </div>
        ))}
      </Dialog>
    </div>
  );
}
