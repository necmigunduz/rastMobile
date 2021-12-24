// BackLog Model
import { Schema, model } from 'mongoose'
// Setup Schema
var backLogSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logType: {
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