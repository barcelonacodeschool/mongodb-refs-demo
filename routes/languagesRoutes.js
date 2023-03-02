const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/languagesController');

//  == This route will give us back all todos: ==  //

router.get('/', controller.findAllLanguages);

//  == This route will give us back one todo, it will be that with the id we are providing: ==  //

router.get('/:lang_id', controller.findOneLanguage);

//  == This route allow us to add an extr todo: ==  //

router.post('/new', controller.addLanguage);

//  == This route allow us to delete one todo t will be that with the id we are providing: ==  //

router.post('/delete', controller.deleteLanguage);

//  == This route allow us to update one todo t will be that with the id we are providing ==  //

router.post('/update', controller.updateLanguage);

module.exports = router;