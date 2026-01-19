const express = require('express');
const { default: mongoose } = require('mongoose');
const userRouter = require('./routers/userRouter');
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(userRouter)

mongoose.connect(process.env.db_path).then(()=>{
    console.log('connect with db sucessfull')
    app.listen(3000,()=>{
        console.log(`server is running on http://localhost:3000`)
    })
}).catch((err)=>{
    console.log("error while connecting to db",err);
})