const {answer} = require("./db")
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/add',async (req, res) => {
    console.log(req.body)
    await answer.create({
        question1: req.body.question1,
        question2: req.body.question2,
    })
    res.status(200).json({
        message:"Added Successfully"
    })
})
app.listen(3000,(req,res)=> {
    console.log("Server is running on port 3000")
})