import  express from "express"
const userRoute = express.Router();
var users=[{id:"10",name:"jhon",age:22},{id:"20",name:"jane",age:31},{id:"30",name:"mike",age:12},{id:"40",name:"pop",age:42}]
userRoute.get("/", async (req, res) => {
    res.status(200).send(users)
});
userRoute.get("/:id", async (req, res) => {
    res.status(200).send(users.find(({id})=>id==req.params.id))
});
userRoute.put("/:id",(req,res)=>{
    users=users.map(item=>item.id==req.params.id?{...req.body.user}:item)
    res.status(200).send(users)
})
export default userRoute;