import { useContext } from "react"
import UserContext from "./UserContext"
import Button from "../../components/button/Button"

export const ChildComponent=()=>{
    const {userId,userName,setUserInfo}=useContext(UserContext)
    
    return (
        <div>
            <p>id: {userId}</p>
            <p>name: {userName}</p>
            <Button title="Change user" onClick={()=>setUserInfo({userId:100,userName:"jhoniiii"})}/>
        </div>
    )
}