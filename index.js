const {answer} = require("./db")
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/add',async (req, res) => {
    console.log(req.body)
    const response = await answer.findOne({ question2: req.body.question2});
    if(!response){
        res.status(404).send({ message:"User Exists with this number"});
        return;
    }
    await answer.create({
        question1: req.body.question1,
        question2: req.body.question2,
        question3: req.body.question3
    })
    res.status(200).json({
        message:"Added Successfully"
    })
})
app.get("/getData",async (req,res) => {
    const response=await answer.find({})
    res.status(200).json({
        data:response
    })
})
app.listen(3000,(req,res)=> {
    console.log("Server is running on port 3000")
})
