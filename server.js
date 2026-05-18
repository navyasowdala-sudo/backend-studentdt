const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dns = require('dns');
const User= require("./model/User");


const bcrypt = require("bcrypt")

dns.setServers(['8.8.8.8', '1.1.1.1']);
app.get("/", (req, res) => {
    res.send("hi");
});

app.use(express.json());


mongoose.connect("mongodb+srv://navyasowdala_db_user:2004@cluster0.ovyshha.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log(err);
});



app.post("/students/add",async(req,res)=>{
    try{

        const user = new User(req.body);

        await user.save();

        res.send(user);
    
    }catch(err){
        res.send(err)
    }
}
)



app.get("/students", async(req, res) => {
    try{

        const user = await user.find();

        res.send("user");

    }catch(err){
        console.groupCollapsed(err)
    }
   
});

app.get("/student/:id", async(req, res)=>{
    try{

        const user= await User.findById(req.params.id);
        res.send(user);

    }catch(err){
        console.log(err)

    }
})


app.put("/students/update/:id",async(req,res)=>{
  
     try{

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}

        )

        res.send(user);

     }catch(err){

     }

})

app.delete("/students/:id",async(req,res)=>{

    try{
   

        const user = await User.findByIdAndDelete(req.params.id);
       res.send("user deleted");



    }catch(err){
    console.log(err)
}
})
app.post("/register", async(req, res)=>{
    try{
        const {name,email,password} =req.body;
        const userExists = await User.findOne({email})

      if(userExists){
        return res.end("user already in db");
      }

      const hashpassword = await bcrypt.hash(password,13);
      console.log("hashpassword",hashpassword)


      const user = new User({
        name,
        email,
        password: hashpassword
      })

      await user.save();

      res.send("User Registered Successfully");

    }catch(err){
        console.log(err);

    }
})





app.listen(4000, () => {
    console.log("server started");
});