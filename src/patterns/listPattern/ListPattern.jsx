import React from 'react'
import List from '../../components/list/List'
const Person=({person})=>{    
    return (
        <>
        <h4>{person.name}</h4>
        <p>age:{person.age}</p>
        </>
    )
}
const Product=({product})=>{
    return (
        <>
        <h4>product name: {product.name}</h4>
        <p>uom: {product.uom}</p>
        </>
    )
}
export default function ListPattern() {
    const persons=[{id:"10",name:"jhon",age:"23"},{id:"15",name:"mike",age:"43"},{id:"30",name:"jane",age:"12"}]
    const products=[{id:"100",name:"fixture",uom:"piece"},{id:"150",name:"wheel",uom:"piece"},{id:"300",name:"oil",uom:"kg"}]
  return (
    <div>
        <List items={persons} resourceName="person" itemComponent={Person}/>
        <List items={products} resourceName="product" itemComponent={Product}/>
    </div>
  )
}
