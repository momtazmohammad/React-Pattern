import React, { useState } from "react";
import Icon from "../../components/Icon";
import PersonForm from "./PersonForm";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import Snack from "../../components/Snack";
export default function ({
  listItems,
  isLoading,  
  onDelete,
  onPut,
  onPost,
  ...others
}) {
  const personInit={
    srl: 0,
    firstname: "",
    lastname: "",
    age: 0,
    country: "iran",
  }
  const [person, setPerson] = useState(personInit);
  const [openPersonDlg, setOpenPersonDlg] = useState(false);
  const [snack, setSnack] = useState({open:false,msg:"",severity:"success"});
  const onChange= (update) => {
    setPerson({ ...person, ...update });
  };
  const onSubmit=()=>{    
    try {
      if (person.srl == 0) {
        onPost(person);
      } else {
        onPut(person);
      }
      setOpenPersonDlg(false)
      setSnack({open:true,msg:"اطلاعات با موفقيت ذخيره گرديد",severity:"success"})
    } catch (err) {
      setSnack({open:true,msg:"خطا در ذخيره اطلاعات",severity:"error"})
      console.log("error happend on saving data",err);
    }
  }
  return (
    <>
      <Modal open={openPersonDlg} onClose={() => setOpenPersonDlg(false)}>
        <PersonForm person={person} onChange={onChange} onSubmit={onSubmit} onClose={()=>setOpenPersonDlg(false)}/>
      </Modal>
      <Snack
        style={{
          zIndex: "1",
          position: "fixed",
          bottom: "10px",
          left: "10px",
          //margin: "5px auto",
          minWidth: "500px",
        }}
        setCloseSnack={()=>setSnack(cur=>({...cur,open:false}))}
        open={snack.open}
        msg={snack.msg}
        duration={5000}
        severity={snack.severity}
      />
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <Button
            title="New"
            style={{ margin: "10px" }}
            onclick={() => {
              setPerson(personInit);
              setOpenPersonDlg(true);
            }}
          />
          <table {...others}>
            <tbody>
              <tr>
                <th>نام</th>
                <th> نام خانوادگي</th>
                <th>سن</th>
                <th>كشور</th>
                <th>عمليات</th>
              </tr>
              {listItems?.map((item) => (
                <tr key={item.srl}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.age}</td>
                  <td>{item.country}</td>
                  <td>
                    <div style={{ display: "flex", direction: "row" }}>
                      <Icon
                        onclick={() => {
                          setPerson({...item});
                          setOpenPersonDlg(true);
                        }}
                        icon={"fa fa-pencil"}
                      />
                      <Icon
                        onclick={() => {
                          onDelete(item.srl);                          
                        }}
                        icon={"fa fa-trash"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
