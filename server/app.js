import  express from "express"
const app=express()
import  userRoute from "./routes/user.js"
import  personRoute from "./routes/person.js"
app.use(express.json()); // parse form data client
// middle ware
// app.use("/", (req, res, next) => {
//     req.headers["user"] = "user1";
//     next();
//   });
app.get("/",(req,res)=>{
    //console.log(req.headers.user)
    res.status(200).send("home page")
})
app.use("/api/users",userRoute);
app.use("/api/persons",personRoute);

app.listen(5000,()=>console.log("server listing to port 5000"))