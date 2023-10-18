import React from 'react'

export default function List({items,resourceName,itemComponent:ItemComponent}) {    
  return (
    <div>
        {items.map(((item,i)=>{
            return (
            <ItemComponent key={i} {...{[resourceName]:item}}/>            
        )}))}      
    </div>
  )
}
