import React, { useEffect, useState } from "react";
import Snack from "../../components/Snack";
import Button from "../../components/button/Button";


function ObserverPattern() {
    class Observable {
        constructor() {
          this.observers = [];
        }
      
        subscribe(func) {
          this.observers.push(func);
        }
      
        unsubscribe(func) {
          this.observers = this.observers.filter((observer) => observer !== func);
        }
      
        notify(data) {
          this.observers.forEach((observer) => observer(data));
        }
      }
      const observable = new Observable();     
  const [openSnack, setOpenSnack] = useState(false);
  const [msg, setMsg] = useState("");
  function logger(data) {
    console.log(`${Date.now()} ${data} `);
  }

  function toastify(data) {
    setMsg(data);
    setOpenSnack(true);
  }
  observable.subscribe(logger);
  observable.subscribe(toastify);

  return (
    <div>
      <Button
        title="Save"
        onclick={() => {
          observable.notify("User clicked save button!");
        }}
      />

      <Snack
        style={{
          zIndex: "1",
          position: "fixed",
          bottom: "10px",
          left: "10px",
          //margin: "5px auto",
          minWidth: "500px",
        }}
        setOpenSnack={setOpenSnack}
        openSnack={openSnack}
        msg={msg}
        duration={5000}
        severity="success"
      />
    </div>
  );
}
export default ObserverPattern