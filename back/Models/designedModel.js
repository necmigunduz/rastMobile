// Designed Model
import { Schema, model } from 'mongoose'
// Setup Schema
var designedSchema = Schema({
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
var Designed = module.exports = model('designed', designedSchema)

export function get(callback, limit) {
    find(callback).limit(limit)
}