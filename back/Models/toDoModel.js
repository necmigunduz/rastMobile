// ToDo Model
import { Schema, model } from 'mongoose'
// Setup Schema
var toDoSchema = Schema({
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
    },
    color: {
        type: String,
        required: true
    }
})

// Export Model
var ToDo = module.exports = mongoose.model('toDo', toDoSchema)

export function get(callback, limit) {
    find(callback).limit(limit)
}