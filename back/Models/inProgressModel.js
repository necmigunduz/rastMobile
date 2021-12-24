// InProgress Model
import { Schema, model } from 'mongoose'
// Setup Schema
var inProgressSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inProgressType: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

// Export Model
var BackLog = module.exports = mongoose.model('backLog', backLogSchema)

export function get(callback, limit) {
    find(callback).limit(limit)
}