const express=require("express")
const app=express()
const port=6000

const teacherRouter=require("./routers/teacherRouter")

app.use(express.json())
app.use("/teachers",teacherRouter)

app.get('/',(req,res)=>{
    res.send("you got a response")
})
 
app.listen(port,()=>{
    console.log("my mini server is started");
})