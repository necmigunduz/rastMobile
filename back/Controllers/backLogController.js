// BackLog Controller
BackLog = require('../Models/backLogModel')

// Index
exports.index = function(req, res) {
    BackLog.get(function(err, backLogs){
        if(err){
            res.json({
                status: "error",
                message: err
            })
        }

        res.json({
            status: "success",
            message: "Backlogs retrieved successfully!",
            data: backLogs
        })
    })
}

// Create
exports.new = function(req, res) {
    
}