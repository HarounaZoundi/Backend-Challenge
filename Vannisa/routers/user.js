const express=require('express');
const router=express.Router();
const User= require("../models/User");



router.get("/", async (req,res)=>{
    let users =await User.findAll();
    res.send(users);
});


router.get('/:id', async (req,res) => {
      let {id}=req.params;
      User.findByPk(id)
      .then(user => {
        res.json(user); 
      });
  });

router.post("/", async(req, res)=>{
    let {firstName, lastName, email, password }=req.body;
    await User.create({firstName, lastName,email, password})
        .then((new_user)=>{
            res.status(200).send({
                status:200,
                success:true,
                message: "A User Was Created!",
                new_user,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                status:500,
                sucess:false,
                message:"ERROR - User Not Created",
                Error:err,
            })
        })

}); 


router.put('/:id', async (req,res) => {
    let {id}=req.params;
    let {firstName, lastName, email, password}=req.body;
    let updated=await User.update(
        {
            firstName, 
            lastName, 
            email, 
            password   
        },
        {
            where:{
                id
            },

        }




    )
    .then(updated => {
      res.json(updated); 
    })
    .catch((err)=>{
        return res.send(err);
     });
});

module.exports=router;