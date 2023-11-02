import React, { useState } from 'react'
import ComboBoxDebounce from './components/dropdown/ComboBoxDebounce';

export default function ComboBoxDebounceApp({...others}) {    
    const [selected, setSelected] = useState(null);
    const items=[
        {
          title: "home",
          value:1
        },
        {
          title: "airport",
          value:1
        },
        {
          title: "airplane",
          value:2
        },
        {
          title: "air traffic",
          value:2
        },
        {
          title: "contact",
          value:3      
        },
      ];    
  return (
    <div {...others}>
      <p>Debounce ComboBox</p>
        <ComboBoxDebounce selectColor="#aaaaee" items={items} selected={selected} onSelect={setSelected} placeHolder="لطفا يكي را انتخاب كنيد"/>
        <p>{selected?.title}</p>
    </div>
  )
}
