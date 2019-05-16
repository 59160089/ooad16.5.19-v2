const express = require('express');
const router = express.Router();

const Controller = require('../controllers/teacherManageController')

router.route('/').get(Controller.index)
router.route('/post').post(Controller.post)
router.route('/update').post(Controller.update)
router.route('/delete/:id').get(Controller.delete)
router.route('/info/:id').get(Controller.info)
module.exports = router