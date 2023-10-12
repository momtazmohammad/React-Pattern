import { useContext } from "react"
import UserContext from "./UserContext"

export const ChildComponent=()=>{
    const {userId,userName}=useContext(UserContext)
    return (
        <div>
            <p>id: {userId}</p>
            <p>name: {userName}</p>
        </div>
    )
}