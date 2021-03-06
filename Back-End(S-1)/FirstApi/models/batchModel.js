const mongoose = require("../connection")

const mySchema = new mongoose.Schema({
    title:String,
    code:String,
    students:Array,
    trainer:{type: mongoose.Types.ObjectId, ref: 'teachers'},
    AssignedAt:{type:Date, default:new Date()}
})

const mybatchModel = mongoose.model("batches",mySchema);
module.exports=mybatchModel;