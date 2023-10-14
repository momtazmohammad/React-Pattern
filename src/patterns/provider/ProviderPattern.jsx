import React, { useState } from "react";
import { ChildComponent } from "./ChildComponent";
import UserContext from "./UserContext";

export const ProviderPattern=(props)=>{
    const [userInfo,setUserInfo]=useState({userId:100,userName:"jhon"})

    return (
        <div>
            <UserContext.Provider value={{...userInfo,setUserInfo}}>
                <ChildComponent/>
            </UserContext.Provider>

        </div>
    )

}