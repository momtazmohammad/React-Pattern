import React, { useState } from "react";
import HocPattern from "./patterns/Hoc-pattern/HocPattern.jsx";
import Select from "./components/Select";
import { UserContainer } from "./patterns/containerPresentation/UserContainer.jsx";
import UserHookPattern from "./patterns/hook-container/UserHookPattern.jsx";
import UserHocPattern from "./patterns/container-hoc/UserHocPattern.jsx";
import { UserInfoForm } from "./patterns/updatable-resource/user-form.jsx";
import { RecuresiveComponent } from "./patterns/recursive/Recuresive-component.jsx";
import { myNestedObject } from "./patterns/recursive/recursive-data.jsx";
import {
  GreenSmallButton,
  GreyButton,
  GreySmallButton,
  RedButton,
} from "./patterns/compositionAndPartial.jsx";
import { CallProxy } from "./patterns/proxyPattern.jsx";
import { ProviderPattern } from "./patterns/provider/ProviderPattern.jsx";
import ObserverPattern from "./patterns/observer-pattern/ObserverPattern.jsx";
import RenderPropsPattern from "./patterns/RenderPropsPattern.jsx";
import CompoundComponent from "./patterns/compoundComponent/CompoundComponent.jsx";
import ListPattern from "./patterns/listPattern/ListPattern.jsx";
import StepperOnboardingPattern from "./patterns/stepperOnboarding-pattern/StepperOnboardingPattern.jsx";
import FormPattern from "./patterns/formpattern/FormPattern.jsx";
import ComboBoxApp from "./ComboBoxApp.jsx";
import ComboBoxDebounceApp from "./ComboBoxDebounceApp.jsx";
import DataGridApp from "./DataGridApp.jsx";
import Button from "./components/button/Button.jsx";
import LovDialogVirtualize from "./components/lov/LovDialogVirtualize.jsx";
import LovDialog from "./components/lov/LovDialog.jsx";
import LovDialogResizable from "./components/lov/LovDialogResizable.jsx";

function PatternList() {  
  const fields=[
    {title:"نام",fieldName:"firstname",width:"70px"},
    {title:"نام خانوادگي",fieldName:"lastname",width:"120px"},
    {title:"سن",fieldName:"age",width:"50px"},  
    {title:"كشور",fieldName:"country",width:"100px"},      
  ]
  
  const lovData=[{srl:10,firstname:"jhon",lastname:"smith",age:22,country:"usa"},{srl:11,firstname:"jane",lastname:"smith",age:20,country:"canada"},{srl:12,firstname:"mike",lastname:"jackson",age:32,country:"iran"}]
  const [openLov, setOpenLov] = useState(false);
  const [openLovResizable, setOpenLovResizable] = useState(false);
  const [openLovVirtual, setOpenLovVirtual] = useState(false);
  const [selectedLovItem,setSelectedLovItem]=useState({})

  const [todoData, setTodoData] = useState({ data: null, isLoading: false });
  const patternList = [
    {
      value: "1",
      title: "لطفا يك پترن را انتخاب كنيد",
      content: <p style={{ margin: "10px" }}>...</p>,
    },
    {
      //we often want to use the same logic in multiple components.This logic can include applying a certain styling to components, requiring authorization, or adding a global state
      value: "2",
      title: "HOC Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <HocPattern data={todoData.data} isLoading={todoData.isLoading} />
        </div>
      ),
    },
    {
      value: "3",
      title: "Container-Presentaion Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <UserContainer />
        </div>
      ),
    },
    {
      value: "4",
      title: "Hook ContainMter Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <UserHookPattern />
        </div>
      ),
    },
    {
      value: "5",
      title: "Container-Hoc Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <UserHocPattern />
        </div>
      ),
    },
    {
      value: "6",
      title: "updatable resource-Hoc Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <UserInfoForm />
        </div>
      ),
    },
    {
      value: "7",
      title: "Recuresive Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <RecuresiveComponent data={myNestedObject} />
        </div>
      ),
    },
    {
      value: "8",
      title: "Composition Pattern and Partial pattern",
      content: (
        <>
          <div style={{ margin: "10px" }}>
            <RedButton text="كليد قرمز" />
          </div>
          <div style={{ margin: "10px" }}>
            <GreenSmallButton text="كليد كوچك سبز" />
          </div>
          <div style={{ margin: "10px" }}>
            <GreyButton text="كليد خاكستري" />
          </div>
          <div style={{ margin: "10px" }}>
            <GreySmallButton text="كليد خاكستري كوچك" />
          </div>
        </>
      ),
    },
    {
      value: "9",
      title: "Proxy Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <CallProxy />
        </div>
      ),
    },
    {
      //context , redux , flux , mobx
      value: "10",
      title: "Provider Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <ProviderPattern />
        </div>
      ),
    },
    {
      value: "11",
      title: "Observer Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <ObserverPattern />
        </div>
      ),
    },
    {
      //Some popular libraries that use the Render Props pattern include: React Router, Formik, Downshift.
      value: "12",
      title: "Render props Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <RenderPropsPattern />
        </div>
      ),
    },
    {
      value: "13",
      title: "Compound Component Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <CompoundComponent />
        </div>
      ),
    },
    {
      value: "14",
      title: "Stepper Loading Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <StepperOnboardingPattern />
        </div>
      ),
    },
    {
      value: "15",
      title: "List Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <ListPattern />
        </div>
      ),
    },
    {
      value: "16",
      title: "Form Pattern",
      content: (
        <div style={{ margin: "10px" }}>
          <FormPattern />
        </div>
      ),
    },
    {
      value: "17",
      title: "Combo Box Component",
      content: (
        <div style={{ margin: "10px" }}>
          <ComboBoxApp style={{ margin: "5px" }} />
          <ComboBoxDebounceApp style={{ margin: "5px" }} />
        </div>
      ),
    },
    {
      value: "18",
      title: "Data Grid Component",
      content: (
        <div style={{ margin: "10px" }}>
          <DataGridApp style={{ margin: "5px" }} />
        </div>
      ),
    },
    {
      value: "19",
      title: "LOV Component",
      content: (
        <div style={{ margin: "10px" }}>
          <Button
            title="Open Lov"
            onclick={() => setOpenLov(true)}
            style={{ margin: "10px" }}
          />
          <LovDialog
            openDlg={openLov}
            setOpenDlg={setOpenLov}
            title="sample Lov"
            fields={fields}
            data={lovData}
            onSelect={(item) => {
              setSelectedLovItem(item);
            }}
          />
          <Button
          title="Open Lov Resizable"
          onclick={() => setOpenLovResizable(true)}
          style={{ margin: "10px" }}
        />
        <LovDialogResizable
          openDlg={openLovResizable}
          setOpenDlg={setOpenLovResizable}
          title="sample Lov"
          fields={fields}
          data={lovData}
          onSelect={(item) => {
            setSelectedLovItem(item);
          }}
        />
          <Button
            title="Open Lov virtual"
            onclick={() => setOpenLovVirtual(true)}
            style={{ margin: "10px" }}
          />
          <LovDialogVirtualize
            openDlg={openLovVirtual}
            setOpenDlg={setOpenLovVirtual}
            title="sample Lov"
            fields={fields}
            data={lovData}
            onSelect={(item) => {
              setSelectedLovItem(item);
            }}
          />
          <div>
            {`name:${selectedLovItem?.firstname ?? ""} , lastname:${
              selectedLovItem?.lastname ?? ""
            }`}
          </div>
        </div>
      ),
    },
  ];
  const [pattern, setPattern] = useState(patternList[0]);
  const onChangeOption = (value) => {
    setPattern(patternList.find((item) => item.value === value));
    if (value === "2") {
      setTodoData({ data: null, isLoading: true });
      setTimeout(() => {
        setTodoData({
          data: [
            { id: "1", task: "task 1", completed: true },
            { id: "2", task: "task 2", completed: false },
          ],
          isLoading: false,
        });
      }, 1000);
    }
  };

  return (
    <div>
      <Select
        className="no-print"
        options={patternList}
        value={pattern}
        name="Sample"
        lable="عنوان"
        handleChange={onChangeOption}
        style={{ margin: "10px 50px 10px 20px", maxWidth: "400px" }}
      />
      {patternList.map((item, index) => (
        <div key={index}>{item.value === pattern.value && item.content}</div>
      ))}
    </div>
  );
}
export default PatternList;
