import React from 'react'
import DataGrid from './components/data-grid/DataGrid'

export default function DataGridApp({...others}) {
    const dataFields=[
        {title:"نام",fieldName:"firstname",width:"70px"},
        {title:"نام خانوادگي",fieldName:"lastname",width:"120px"},
        {title:"سن",fieldName:"age",width:"50px"},  
        {title:"كشور",fieldName:"country",width:"100px"},  
        {title:"كد ملي",fieldName:"idcode",width:"120px"},  
        {title:"پست سازماني",fieldName:"posttitle",width:"270px"},  
        {title:"كد پرسنلي",fieldName:"empcode",width:"100px"},  
        {title:"شماره شناسنامه",fieldName:"idnumber",width:"150px"},  
        {title:"واحد سازماني",fieldName:"depname",width:"100px"},  
      ]
      const data=[{srl:10,firstname:"jhon",lastname:"smith",age:22,country:"usa",idcode:"12345678901" ,posttitle:"كارشناس سيستمهاي كيفيت و مهندسي 1",empcode:"120120",idnumber:"200300",depname:"نرم افزار"},{srl:11,firstname:"jane",lastname:"smith",age:20,country:"canada",idcode:"123456789071" ,posttitle:"كارشناس سيستمهاي كيفيت و مهندسي 2",empcode:"1201320",idnumber:"200400",depname:"سخت افزار"},{srl:12,firstname:"mike",lastname:"jackson",age:32,country:"iran",idcode:"12345678903" ,posttitle:"كارشناس سيستمهاي كيفيت و مهندسي 3",empcode:"220920",idnumber:"207800",depname:"حسابداري"}]      
  return (
    <div {...others}>
      <DataGrid dataFields={dataFields} data={data}/>
    </div>
  )
}
