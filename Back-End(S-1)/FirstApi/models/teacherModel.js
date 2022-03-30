const mongoose = require("../connection")

const mySchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    branch:String,
    subject:String,
    AssignedAt:{type:Date, default:new Date()}

})
const myModel = mongoose.model("teachers", mySchema)
module.exports=myModel;