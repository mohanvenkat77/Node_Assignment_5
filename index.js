const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(express.json())
app.use(bodyParser.json())


app.get("/welcome",(req,res)=>{
    res.status(200).send('Welcome to Dominos')
})


app.get('/contact',(req,res)=>{
    res.status(200).send({
        phone:'186021000000',
        email:'guestcaredominos@jublfood.com'
    })
})

app.get('*', (req,res)=>{
     res.status(404).send({message})
})


app.listen(5001,(err)=>{
   if(!err){
    console.log("server running")
   }
   else{
    console.log("error", err)
   }
})