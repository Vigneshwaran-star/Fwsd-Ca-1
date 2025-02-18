const express = require('express');
const app=express();
const Port =3000;
app.use(express.json())
app.get('/',(req,res)=>{
    return res.send("Hi! welcome to my website");
})
app.post('/signup',(req,res)=>{
    const {user,password,email}=req.body;
    if(!user){
        res.status(400).send("userName required");
    if (!email){
        res.status(400).send("Email cannot be empty")
    }    
    }
    if(!(password.length > 8 && password.length <=16)){
        res.status(400).send("Paswword length should be greater than or less than or equal to 16 ")
    }
})
app.listen(Port,()=>{
    console.log(`server running at http://localhost:${Port}`)
})