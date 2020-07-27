const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Get method
router.get("/", async (req, res) => {
  let users = await User.findAll();
  res.send(users);
});
//sign- up
router.post('/', (req, res) =>{
    let {id, firstName, lastName, email,password }=req.body;
    User.create({id, firstName, lastName, email,password })
    .then((user)=>{
        res.status(200).send({
            status:200,
            success:true,
            message: "user created !!",
            user,
        })
    })
    .catch((err)=>{
        res.status(500).send({
            status:500,
            sucess:false,
            message:"ERROR ",
            Error:err,
        })
    })
})

module.exports = router;
