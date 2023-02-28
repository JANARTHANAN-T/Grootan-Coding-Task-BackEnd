if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
  }
  
  
  const express = require('express')
  const app = express()
  const mongoose=require("mongoose")
  const cors=require("cors")
  const Answers = require("./models/answers.js");

 
  
  mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
  .then( () => {
      console.log("DB Connected")
  }).catch(err => {
      console.log("DB not Connected")
  })

   
  const port = process.env.PORT || 8000
  const server=app.listen(port,()=> console.log(`server is running on ${port}`))
  io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
  })
  
  app.use(express.json({extended:true}))
  app.use(express.urlencoded({ extended: true }))
  
  
  app.use(cors())

  app.get('/',(req,res)=>{
      res.send('Grootan Coding Task')
  })

  app.post('/question',async(req,res)=>{
    try{
        const answer = new Answers({ ...req.body });
        console.log(answer);
        await answer.save();
        // socket.emit('submited', 'submitted successfully' );
        res.status(200).json("Submitted Successfully");
    }
    catch (err) {
        res.status(500).json({ msg: "Internal Server Error" });
      }

        
  })

  




  io.on("connection",(socket)=>{
    console.log("Socket connected", socket.id);
    // socket.emit('submited', 'submitted successfully' );
    socket.on("error", () => {});
    socket.on('disconnect',() => {
        console.log("not submited");
      })
  })