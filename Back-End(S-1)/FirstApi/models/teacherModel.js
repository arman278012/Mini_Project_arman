const mongoose = require("../connection")

const mySchema = new mongoose.Schema({
    name:String,
    username:String,
    subject:String,
    branch:String,
    password:String,
    
    
    AssignedAt:{type:Date, default:new Date()}

})
const myModel = mongoose.model("teachers", mySchema)
module.exports=myModel;