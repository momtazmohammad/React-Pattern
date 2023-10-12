import { ChildComponent } from "./ChildComponent";
import UserContext from "./UserContext";

export const ProviderPattern=(props)=>{
    const userInfo={userId:100,userName:"jhon"}
    return (
        <div>
            <UserContext.Provider value={userInfo}>
                <ChildComponent/>
            </UserContext.Provider>

        </div>
    )

}