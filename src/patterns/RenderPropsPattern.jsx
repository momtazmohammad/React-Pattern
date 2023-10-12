//render props , simply props of a component where you can pass functions. These functions need to return elements, which will be used in rendering the component
import React, { useState } from 'react'

function Input(props) {
    const [value, setValue] = useState("");
  
    return (
      <>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Temp in °C"
        />
        {props.render(value)}
      </>
    );
  }
function Kelvin({ value }) {
    return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}
  
function Fahrenheit({ value }) {
    return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
}

//Children as a function
function Input2(props) {
    const [value, setValue] = useState("");
   
    return (
      <>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Temp in °C"
        />
        {props.children(value)}
      </>
    );
  }
  
export default function RenderPropsPattern() {
  return (
    <div>
       <h3>☃️ Temperature Converter ,render props🌞</h3>
      <Input
        render={value => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
        <h3>☃️ Temperature Converter ,Children as a function🌞</h3>
      <Input2>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input2>
    </div>
  )
}
