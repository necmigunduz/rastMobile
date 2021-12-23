// Designed Model
var mongoose = require('mongoose')
// Setup Schema
var designedSchema = mongoose.Schema({
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

module.exports.get = function(callback, limit) {
    Designed.find(callback).limit(limit)
}