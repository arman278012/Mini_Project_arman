const router = require ("express").Router()
const Model = require("../models/AssignmentModel")

router.post("/add",(req,res) => {
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
// router.get("/getall",(req,res)=> {
//     console.log("A request in user router at home")
//     res.send("respnse from user router at home")
// })
router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("student list fetched successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports=router;















// const router = require ("express").Router()
// const Model = require("../models/assignmentModel")

// router.post("/address",(req,res) => {
//     console.log(req.body);

//     new Model(req.body)
//     .save()
//     .then((data)=>{
//         console.log("User data saved sucessfully");
//         res.status(200).json(data)
//     })
//     .catch((err)=>{
//         console.error(err)
//         res.status(500).json(err)
//     })
// })

// router.get("/getall", (req, res) => {
    
//      Model.find({})
//      .then((data) => {
//        console.log("Assignment data fetched successfully..");
//        res.status(200).json(data);
//      })
//      .catch((err) => {
//        console.error(err);
//        res.status(500).json(err);
//      });
//     });

// module.exports=router;