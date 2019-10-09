const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

const informationController = require('./informationController');

router.route('/information')
    .get(informationController.index)
    .post(informationController.new);

router.route('/information/:information_id')
    .get(informationController.view)
    .patch(informationController.update)
    .put(informationController.update)
    .delete(informationController.delete);

module.exports = router;
