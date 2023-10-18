import React from "react";

export default function StepperOnboardingFlow({ data,currentIndex, onNext ,children}) {
  const gotoNext = (stepdata) => onNext(stepdata);

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {    
    return React.cloneElement(currentChild, { gotoNext,data });
  }

  return currentChild;
}
