import { includeUpdatableResource } from "./includeUdatableResource";
const UserForm=({user,onChangeUser,onPutUser,onResetUser})=>{
    const {name,age}=user || {}
    return user ? (
        <>
        <label style={{padding:"5px",margin:"5px"}}>
            Name:
            <input name="name" value={name} onChange={(e)=>onChangeUser({name:e.target.value})} />
        </label>
        <label style={{padding:"5px",margin:"5px"}}>
            age:
            <input name="age" type="number" value={age} onChange={(e)=>onChangeUser({age:Number(e.target.value)})} />
        </label>
        <button style={{backgroundColor:"#996666" , color:"white",margin:"5px"}} onClick={onResetUser}>Reset</button>
        <button style={{backgroundColor:"#666699" , color:"white",margin:"5px"}} onClick={onPutUser}>Save</button>
        </>
    ):(<h3>Loading ...</h3>)
}
export const UserInfoForm=includeUpdatableResource(
    UserForm,"/api/users/20","user"
)