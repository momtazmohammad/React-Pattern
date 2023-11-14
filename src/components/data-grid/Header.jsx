import React, { useContext, useState } from 'react'
import Columns from './Columns'
import Filter from './Filter'
import Button from './Button'
import { CSVLink } from "react-csv";
import { filterData } from './filterData';
import DataContext from './DataContext'

export default function Header({onchange}) {
  const {fields,data}=useContext(DataContext)
    const [openColumnDlg,setOpenColumnDlg]=useState(false)
    const [openFilterDlg,setOpenFilterDlg]=useState(false)    
    const csvColumns=()=>{      
      let headers = [];
      fields.forEach((col) => {
        if (col.show) {          
          headers.push({ label: col.title, key: col.fieldName });
        }
      });      
      return headers;
    }
  return (
    <div className='no-print'>
    <Columns onchange={onchange}  openDlg={openColumnDlg} setOpenDlg={setOpenColumnDlg}/>
    <Filter  onchange={onchange}  openDlg={openFilterDlg} setOpenDlg={setOpenFilterDlg}/>
    <div style={{display:"flex",flexDirection:"row-reverse"}}>
    <Button title='انتخاب ستونها' icon="fa fa-columns" onClick={()=>setOpenColumnDlg(cur=>!cur)}/>
    <Button title='تعريف فيلترها' icon="fa fa-filter" onClick={()=>setOpenFilterDlg(cur=>!cur)}/>
    <Button title='چاپ' icon="fa fa-print" onClick={()=>window.print()}/>    
    <CSVLink data={data?.filter(item=>filterData(item,fields))} headers={csvColumns()} filename={"data-report.csv"}>    
    <Button title='خروجي excel csv' icon="fa fa-file-excel-o" />
      </CSVLink>
    </div>
    </div>
  )
}
