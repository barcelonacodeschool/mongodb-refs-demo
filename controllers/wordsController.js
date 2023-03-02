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

	// GET find one language by _id
	// async findOneLanguage(req,res){
	// 	let lang_id = req.params.lang_id
	// 	try{
	// 		const language = await Words.findOne({_id:lang_id})
	// 		res.send({ok:true, data:language})
	// 	}
	// 	catch(e){
	// 		res.send({ok:false, data:e})
	// 	}
	// }

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

	// DELETE language
	// async deleteLanguage(req,res){
	// 	let {language} = req.body
	// 	try {
	// 		const deletedLanguage = await Words.deleteOne({language})
	// 		res.send({ok:true,data:deletedLanguage})
	// 	}
	// 	catch(e){
	// 		res.send({ok:false, data:e})
	// 	}
	// }

	// POST update language
	// async updateLanguage(req,res){
	// 	let {language, newLanguage} = req.body
	// 	try {
	// 		const updatedLanguage = await Words.updateOne({language},{language:newLanguage})
	// 		res.send({ok:true,data:updatedLanguage})
	// 	}
	// 	catch(e){
	// 		res.send({ok:false,data:updatedLanguage})
	// 	}
	// }
}

module.exports = new WordsController()
