const mongoose = require('mongoose')

// Connect to MongoDB

mongoose.connect('mongodb+srv://utkarshkld:hX69wWc61x8uE6Rq@cluster0.kvivsot.mongodb.net/answers')

// Define schemas

const answerschema = new mongoose.Schema({
    // Schema definition here
    question1: String,
    question2: String
})

const answer = mongoose.model('Answers', answerschema)

module.exports = {
    answer
}
