// Designed Model
let mongoose = require('mongoose')
// Setup Schema
let designedSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    designedType: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

// Export Model
var Designed = module.exports = mongoose.model('designed', designedSchema)

export function get(callback, limit) {
    find(callback).limit(limit)
}