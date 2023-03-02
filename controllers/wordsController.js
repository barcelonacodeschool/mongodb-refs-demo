const Words = require('../models/words.js')
const ObjectId = require('mongoose').Types.ObjectId;

class WordsController {
	// GET find all Words
	async findAllWords(req,res){
		try{
			const words = await Words.find({}).populate('language_id')
			res.send({ok:true, data:words})
		}
		catch(e){
			res.send({ok:false, data:e})
		}
	}

	// POST add a language
	async addWord(req,res){
		let {word,lang_id}=req.body
		try{
			const word_added = await Words.create({
				word,
				language_id: new ObjectId(lang_id)
			})
			res.send({ok:true,data:word_added})
		}
		catch(e){
			res.send({ok:false, data:e})
		}
	}
}

module.exports = new WordsController()
