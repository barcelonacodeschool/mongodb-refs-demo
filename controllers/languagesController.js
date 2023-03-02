const Languages = require('../models/languages.js')

class LanguagesController {
	// GET find all languages
	async findAllLanguages(req,res){
		try{
			const languages = await Languages.find({})
			res.send({ok:true, data:languages})
		}
		catch(e){
			res.send({ok:false, data:e})
		}
	}

	// GET find one language by _id
	async findOneLanguage(req,res){
		let lang_id = req.params.lang_id
		try{
			const language = await Languages.findOne({_id:lang_id})
			res.send({ok:true, data:language})
		}
		catch(e){
			res.send({ok:false, data:e})
		}
	}

	// POST add a language
	async addLanguage(req,res){
		let {language}=req.body
		try{
			const lang_added = await Languages.create({language})
			res.send({ok:true,data:lang_added})
		}
		catch(e){
			res.send({ok:false, data:e})
		}
	}

	// DELETE language
	async deleteLanguage(req,res){
		let {language} = req.body
		try {
			const deletedLanguage = await Languages.deleteOne({language})
			res.send({ok:true,data:deletedLanguage})
		}
		catch(e){
			res.send({ok:false, data:e})
		}
	}

	// POST update language
	async updateLanguage(req,res){
		let {language, newLanguage} = req.body
		try {
			const updatedLanguage = await Languages.updateOne({language},{language:newLanguage})
			res.send({ok:true,data:updatedLanguage})
		}
		catch(e){
			res.send({ok:false,data:updatedLanguage})
		}
	}
}

module.exports = new LanguagesController()
