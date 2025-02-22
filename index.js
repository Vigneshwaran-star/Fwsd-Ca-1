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
       return res.status(400).send("userName required");
    }
    if (!email){
       return res.status(400).send("Email cannot be empty")
    }    
    if(!(password.length > 8 && password.length <=16)){
      return  res.status(400).send("Paswword length should be greater than 8 or less than or equal to 16 ")
    }
})
app.listen(Port,()=>{
    console.log(`server running at http://localhost:${Port}`)
})