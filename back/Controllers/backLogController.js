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

// View
exports.view = function(res, req) {
    BackLog.findBy(req.params.backLog_id, function(err, backLog){
        if(err)
            res.send(err)

        res.json({
            message: "Backlog details uploading!",
            data: backLog
        })
    })
}

exports.update = function(req, res) {
    BackLog.findBy(req.params.backLog_id, function(err, backLog){
        if(err)
            res.send(err)

        backLog.name = req.body.name ? req.body.name : backLog.name
        backLog.description = req.body.description
        backLog.logType = req.body.logType
        backLog.color = req.body.color
        // Save updated backlog
        backLog.save(function(err){
            if(err)
                res.json(err)

            res.json({
                message: "Backlog info is updated successfullly!",
                data: backLog
            })
        })
    })
}

