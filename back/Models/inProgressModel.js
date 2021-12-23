// InProgress Model
var mongoose = require('mongoose')
// Setup Schema
var inProgressSchema = mongoose.Schema({
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

module.exports.get = function(callback, limit) {
    BackLog.find(callback).limit(limit)
}