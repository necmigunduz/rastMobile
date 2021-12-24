// BackLog Controller
Contact = require('../Models/backLogModel')

// Index
exports.index = function(req, res) {
    BackLog.get(function(err, backLogs){
        if(err) {
            res.json({
                status: "error",
                message: err,                
            })
        }
        res.json({
            status: "success",
            message: "Backlogs are retrieved successfully!",
            data: backLogs
        })
    })
}

// Create

exports.create = function(req, res) {
    let backLog = new BackLog()
    backLog.name = req.body.name ? req.body.name : backLog.name
    backLog.description = req.body.description
    backLog.logType = req.body.logType
    backLog.color = req.body.color

    // Save created backlog
    backLog.save(function(err){
        if(err)
            res.json(err)
        res.json({
            message: "New backlog is created successfully!",
            data: backLog
        })
    })
}
