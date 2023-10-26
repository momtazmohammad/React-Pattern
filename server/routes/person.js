import  express from "express"
const personRoute = express.Router();
var persons=[{srl:10,firstname:"jhon",lastname:"smith",age:22,country:"usa"},{srl:11,firstname:"jane",lastname:"smith",age:20,country:"canada"},{srl:12,firstname:"mike",lastname:"jackson",age:32,country:"iran"}]
let personSrl=40;
personRoute.get("/", async (req, res) => {
    res.status(200).send(persons)
});
personRoute.get("/:srl",(req,res)=>{
    res.status(200).send(persons.find(({srl})=>srl==req.params.srl))
})
personRoute.put("/:srl",(req,res)=>{
    persons=persons.map(item=>item.srl==req.params.srl?{...req.body.person}:item)
    res.status(200).send("ok")
})
personRoute.post("/",(req,res)=>{
    const person={...req.body.person,srl:personSrl++}
    persons.push(person)
    res.status(200).send(person)
})
personRoute.delete("/:srl",(req,res)=>{
    persons=persons.filter(item=>item.srl!=req.params.srl)
    res.status(200).send(persons)
})

export default personRoute;