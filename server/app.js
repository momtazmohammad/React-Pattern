import  express from "express"
const app=express()
import  userRoute from "./routes/user.js"
import  personRoute from "./routes/person.js"
import { Server } from "socket.io";

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

var server=app.listen(5000,()=>console.log("server listing to port 5000"))
const io = new Server(server, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  //console.log("socket connection id", socket.id);

  // Handle chat event
  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  });

  // Handle typing event
  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});
