const path = require('path');
const express =  require('express');

const fibController = require('../controllers/fibController');
//we imported the controller here

const router = express.Router();

router.get('/', fibController.getValues);

router.post('/', fibController.postValues);


module.exports=router;
