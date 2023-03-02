const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/languagesController');

// This route will give us back all languages:
router.get('/', controller.findAllLanguages);

// This route will give us back one language by id:
router.get('/:lang_id', controller.findOneLanguage);

// This route allows us to add a new language:
router.post('/new', controller.addLanguage);

// This route allows us to delete one language by name
router.post('/delete', controller.deleteLanguage);

// This route allow us to update a language by it's name
router.post('/update', controller.updateLanguage);

module.exports = router;