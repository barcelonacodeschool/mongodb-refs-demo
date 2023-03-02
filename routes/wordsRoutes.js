const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/wordsController');

//  == This route will give us back all todos: ==  //

router.get('/', controller.findAllWords);

//  == This route will give us back one todo, it will be that with the id we are providing: ==  //

// router.get('/:todo_id', controller.findOne);

//  == This route allow us to add an extr todo: ==  //

router.post('/new', controller.addWord);

//  == This route allow us to delete one todo t will be that with the id we are providing: ==  //

// router.post('/delete', controller.delete);

//  == This route allow us to update one todo t will be that with the id we are providing ==  //

// router.post('/update', controller.update);

module.exports = router;