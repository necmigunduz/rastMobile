// BackLog Controller
import BackLog from '../Models/backLogModel'

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
    let backLog = new BackLog()
    backLog.name = req.body.name ? req.body.name : backLog.name
    backLog.description = req.body.description
    backLog.logType = req.body.logType
    backLog.color = req.body.color

    // Save backlog
    backLog.save(function(err){
        if(err)
            res.json(err)

        res.json({
            message: "New backlog is successfully created!",
            data: backLog
        })
    })
}