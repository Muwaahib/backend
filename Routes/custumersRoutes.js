const express = require('express');
const router = express.Router();
const custumers = require ('../controllers/custumersCon')

// get all

router.get('/all',custumers.getAll)

// create 
router.post('/',custumers.create)


module.exports = router;