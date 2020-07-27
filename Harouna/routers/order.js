const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op; // need to request by multiple ids
const Order = require("../models/order");

//Get all orders
router.get("/", async (req, res) => {
    let orders = await Order.findAll();
    res.send(orders);
  });

//Get all order by user id or order id.
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    let orders = await Order.findAll({
        where: {
            [Op.or]: [{ id: id }, { user_id: id }],
          }
    });
    res.send(orders);
  });

// Post a new order
router.post("/", async(req, res)=>{
    let { user_id, name,quantity, price }=req.body;
    await Order.create({user_id, name,quantity, price })
        .then((order)=>{
            res.status(200).send({
                status:200,
                success:true,
                message: "order created !!",
                order,
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


//Put method for updating and order by id
router.put("/update/:id", async (req, res) => {
    let Id = req.params.id;
    let { name,quantity, price }=req.body;
    let response = await Order.update(
        { 
            name,
            quantity,
            price
        },
        {
            where: {
            id: Id,
            },
        }
    )
      .then((response) => response)
      .catch((err) =>
        res.status(500).send({
          status: 500,
          success: false,
          Error: err
        })
      );
  
    if (response == 1) {
      res.send({
        status: 200,
        success: true,
        updated: {
            name,
            quantity,
            price
        },
      });
    } else if (response == 0) {
      return res.status(500).send({
        status: 500,
        success: false,
        updated: "None",
        message: "Invalid Order id:",
      });
    }
  });
//Delete method for deleting my order by id
router.delete("/delete/:id", async (req, res) => {
    let Id = req.params.id;
  
    let response = await Order.destroy({
      where: {
        id: Id
      },
    })
      .then((response) => response)
      .catch((err) => {
        return res.send(err);
      });
  
    if (response == 1) {
      res.send({
        status: 200,
        success: true,
        deleted: {
          response,
        },
      });
    } else if (response == 0) {
      res.send({
        status: 501,
        success: false,
        deleted: {
          row: "none",
        },
      });
    }
  });

module.exports = router;
