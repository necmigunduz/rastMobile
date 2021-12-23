// BackLog Model
var mongoose = require('mongoose')
// Setup Schema
var toDoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    toDoType: {
        type: String,
        required: true
    }
})

// Export Model
var ToDo = module.exports = mongoose.model('toDo', toDoSchema)

module.exports.get = function(callback, limit) {
    ToDo.find(callback).limit(limit)
}