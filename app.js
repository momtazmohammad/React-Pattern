import  express from "express"
const app=express()
app.use(express.json()); // parse form data client
var users=[{id:"10",name:"jhon",age:22},{id:"20",name:"jane",age:31},{id:"30",name:"mike",age:12},{id:"40",name:"pop",age:42}]
// app.use("/", (req, res, next) => {
//     req.headers["user"] = "user1";
//     next();
//   });
app.get("/",(req,res)=>{
    //console.log(req.headers.user)
    res.status(200).send("home page")
})
// server side rendring
// app.get("/", (req, res) => {
//     const app = ReactDOMServer.renderToString(<App />);
//   });
app.get("/api/users",(req,res)=>{
    res.status(200).send(users)
})
app.get("/api/users/:id",(req,res)=>{
    res.status(200).send(users.find(({id})=>id==req.params.id))
})
app.put("/api/users/:id",(req,res)=>{
    users=users.map(item=>item.id==req.params.id?{...req.body.user}:item)
    res.status(200).send(users)
})

app.listen(5000,()=>console.log("server listing to port 5000"))