const express=require('express');
const router=express.Router();
const User= require("../models/User");
const Order= require("../models/Order");
const Sequelize = require('sequelize');
const Op=Sequelize.Op;


router.get("/", async (req,res)=>{
    let orders =await Order.findAll();
    res.send(orders);
});


router.get('/:id', async (req,res) => {
      let {id}=req.params;
      let orders= await Order.findAll({
          where:{
              [Op.or]:[{id}, {userId:id}],
          }
        })
      .then(order => {
        res.json(order); 
      })
      .catch((err)=>{
      return res.send(err);})
  });

router.post("/", async(req, res)=>{
    let {userId, orderName, quantity, price }=req.body;
    await Order.create({userId, orderName, quantity, price })
        .then((new_order)=>{
            res.status(200).send({
                status:200,
                success:true,
                message: "An Order Was Created!",
                new_order,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                status:500,
                sucess:false,
                message:"ERROR - Order Not Created",
                Error:err,
            })
        })

}); 


router.put('/:id', async (req,res) => {
    let {id}=req.params;
    let  {userId, orderName, quantity, price }=req.body;
    let updated=await Order.update(
        {
           userId, 
           orderName, 
           quantity, 
           price 
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