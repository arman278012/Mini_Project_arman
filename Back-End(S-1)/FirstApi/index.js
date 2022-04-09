const express=require("express")
const app=express()
const port=5000
const cors = require("cors");



const teacherRouter=require("./routers/teacherRouter")
const assignmentRouter=require("./routers/assignmentRouter")

app.use(express.json())

app.use(cors({
    origin : ['http://localhost:3000']
}))

app.use("/teacher",teacherRouter)
app.use("/assignment",assignmentRouter)


app.get('/',(req,res)=>{
    res.send("you got a response")
})

app.listen(port,()=>{
    console.log("my mini server is started");
})