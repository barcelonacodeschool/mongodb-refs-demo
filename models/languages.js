const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LanguageSchema = new Schema({
    language:{
        type:String, required:true, unique:true
    }
},
{strictQuery: false}
)
module.exports =  mongoose.model('languages', LanguageSchema);