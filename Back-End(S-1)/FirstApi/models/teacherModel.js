const mongoose = require("../connection")

const mySchema = new mongoose.Schema({
    name:string,
    username:string,
    password:string,
    branch:string,
    subject:string,
    AssignedAt:{type:Date, default:new Date()}

})
const myModel = mongoose.model(mySchema,"teachers")
module.exports=myModel;