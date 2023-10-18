import React, { useState } from 'react'
import StepperOnboardingFlow from './StepperOnboardingFlow'
import Button from '../../components/button/Button'

const StepOne=({gotoNext})=>(
    <>
    <h3>Step 1</h3>
    <p>Please add product to your cart </p>    
    <Button title='Next' onClick={()=>gotoNext({Product:"TV set",price:2300000})}/>
    </>    
)
const StepTwo=({gotoNext})=>(
    <>
    <h3>Step 2</h3>
    <p>Please enter your name and your address</p>
    <Button title='Next' onClick={()=>gotoNext({customerName:"jhon",customerAddr:"tehran",customerDiscount:1000})}/>
    </>    
)
const StepThree=({gotoNext})=>(
    <>
    <h3>Step 3</h3>
    <p>Please enter discount amount you want to use</p>
    <Button title='Next' onClick={()=>gotoNext({discountUsed:500})}/>
    </>    
)
const StepFour=({data})=>{
    console.log(data);
    return (
    <>
    <h3>Step 4</h3>
    <p>your order will deliver soon!!!</p>
    </>    
)}

export default function StepperOnboardingPattern() {
    const [data,setData]=useState({})
    const [currentIndex,setCurrentIndex]=useState(0)
    const onNext=stepData=>{
        setData({...data,...stepData});
        setCurrentIndex(currentIndex+1);
    }
  return (
    <div>      
      <StepperOnboardingFlow data={data} currentIndex={currentIndex} onNext={onNext} >
        <StepOne/>
        <StepTwo/>
        {data.customerDiscount && <StepThree/>}
        <StepFour />
      </StepperOnboardingFlow>
    </div>
  )
}
