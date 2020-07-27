const express =require('express');
const app=express();
const db=require('./config/config');
const bodyParser=require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT

app.use(bodyParser.json());

db.authenticate()
    .then(()=>{
            return console.log('db is connected !!!')})
    .catch((err)=>{ return console.err(err)})
db.sync();



app.get('/', (req, res)=>{res.send("backend is working")});
app.use("/orders", require('./routers/order'));
app.use("/users", require('./routers/user'));
app.listen(PORT,()=>console.log("server is running on Port " + PORT));
