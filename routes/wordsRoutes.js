const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/wordsController');

// This route is to see all words
router.get('/', controller.findAllWords);

// This route is to add a new word
router.post('/new', controller.addWord);

module.exports = router;
