import React, {  useState } from 'react'
import Header from './Header'
import Container from './Container'
import DataContext from './DataContext'

export default function DataGrid({dataFields,data}) {
    const [fields,setFields]=useState(dataFields.map(item=>({...item,show:true,filterValue:""})))
    const onChange=({fieldName,type,value=""})=>{
        if(type==="show"){
            setFields(items=>items.map(item=>item.fieldName==fieldName?{...item,show:!item.show}:item))
        } else {
            setFields(items=>items.map(item=>item.fieldName==fieldName?{...item,filterValue:value}:item))
        }
    }    
  return (
    <DataContext.Provider value={{data,fields}}>
    <div style={{display:"flex",flexDirection:"column"}}>
  <Header style={{flex:1 }} onchange={onChange}  />    
  <Container style={{flex:1}} reportTitle="گزارش نمونه خروجي" />          
    </div>
    </DataContext.Provider>
  )
}
