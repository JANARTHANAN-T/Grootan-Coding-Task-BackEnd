if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
  }
  
  
  const express = require('express')
  const app = express()
  const mongoose=require("mongoose")
  const cors=require("cors")
  
  mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
  .then( () => {
      console.log("DB Connected")
  }).catch(err => {
      console.log("DB not Connected")
  })
  
  app.use(express.json({extended:true}))
  app.use(express.urlencoded({ extended: true }))
  
  
  app.use(cors())

  app.get('/',(req,res)=>{
      res.send('Grootan Coding Task')
  })

  
  const port = process.env.PORT || 8000
  app.listen(port,()=> console.log(`server is running on ${port}`))