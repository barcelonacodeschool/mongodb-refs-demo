const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WordsSchema = new Schema({
    language_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'languages'
    },
    word:{type:String, required:true}
},
{strictQuery: false}
)

module.exports =  mongoose.model('words', WordsSchema);
