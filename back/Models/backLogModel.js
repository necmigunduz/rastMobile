// BackLog Model
let mongoose = require('mongoose')
// Setup Schema
let backLogSchema = mongoose.Schema({
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