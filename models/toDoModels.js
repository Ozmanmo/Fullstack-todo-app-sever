const mongoose = require ('mongoose');

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})


const model= mongoose.model('ToDo', todoSchema)

module.exports = model