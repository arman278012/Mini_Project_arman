const mongoose = require("../connection")

const mySchema = new mongoose.Schema({
    title:string,
    code:string,
    students:Array,
    trainer:{type: mongoose.Types.ObjectId, ref: 'teachers'},
    AssignedAt:{type:Date, default:new Date()}

})
const myModel = mongoose.model(mySchema,"batches");
module.exports=myModel;