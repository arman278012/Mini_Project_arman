const router = require ("express").Router()
const Model = require("../models/batchModel")

router.post("/address",(req,res) => {
    console.log(req.body);

    new Model(req.body)
    .save()
    .then((data)=>{
        console.log("User data saved sucessfully");
        res.status(200).json(data)
    })


    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
})

router.post("/home",(req,res)=> {
    console.log("A request in user router at home")
    res.send("respnse from user router at home")
})

module.exports=router