const mongoose = require("../connection")

const mySchema = new mongoose.Schema({
    
    title : String,
    description : String,
    batch : String,
    instructions : String,
    file: String,
    createdAt:{type:Date, default:new Date()},
    submissionDate:Date
})

const assignmentModel = mongoose.model("assignments",mySchema);
module.exports=assignmentModel;