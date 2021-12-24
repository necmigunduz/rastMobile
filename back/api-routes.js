// API Routes
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import backlog controller and set backlog routes
let backLogController = require('./Controllers/backLogController')
router.route('/backlogs')
    .get(backLogController.index)
    .post(backLogController.new)

router.route('/backlogs/:backlog_id')
    .get(backLogController.view)
    .patch(backLogController.update)
    .put(backLogController.update)
    .delete(backLogController.delete    )

// Export API routes
module.exports = router;