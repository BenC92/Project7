const express = require('express');
const router = express.Router();
//const cors = require('cors')

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

router.get('/',   postCtrl.getAllPost);
router.post('/', postCtrl.createPost);
router.get('/:id',   postCtrl.getOnePost);
//router.delete('/:id',   postCtrl.deleteSauce);
module.exports = router;