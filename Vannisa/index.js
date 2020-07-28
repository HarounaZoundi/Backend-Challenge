const express =require('express');
const app=express();
const db=require('./config/config');
const bodyParser=require("body-parser");
const PORT= require('dotenv').config();

app.use(bodyParser.json());

db.authenticate()
    .then(()=>{
            return console.log('The backend is connected to the db')})
    .catch((err)=>{ return console.err(err)})
db.sync();





  
app.get('/', (req, res)=>{res.send("Congratulations! You have successfully acessed the backend!")});
app.use("/users", require('./routers/user'));
app.use("/orders", require('./routers/order'));
app.listen(process.env.PORT,()=>console.log("server is running"));