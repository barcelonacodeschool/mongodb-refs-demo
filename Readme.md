# Using references across mongoDB collection demo

## Install and run:
1. git clone this repo
2. `npm i` to install the packages
3. `nodemon` to start the server


## Working with languages:

### Add new language
URL: localhost:4000/languages/new
Type of request: POST
Body: {language:'Japanese'}

Response:
```
{
    "ok": true,
    "data": {
        "language": "Japanese",
        "_id": "6400873a7adff5def7484fe8",
        "__v": 0
    }
}
```

### See all languages
URL: localhost:4000/languages/
Type of request: GET

Response:
```
{
    "ok": true,
    "data": [
        {
            "_id": "6400873a7adff5def7484fe8",
            "language": "Japanese",
            "__v": 0
        },
        {
            "_id": "640088461c4440068415dae3",
            "language": "Chinese",
            "__v": 0
        }
    ]
}
```

### Get one language
URL: localhost:4000/languages/6400873a7adff5def7484fe8
Type of request: GET

Response:
```
{
    "ok": true,
    "data": {
        "_id": "6400873a7adff5def7484fe8",
        "language": "Japanese",
        "__v": 0
    }
}
```


### Delete a language
URL: localhost:4000/languages/delete
Type of request: POST
Body: {language:'Japanese'}

Response:
```
{
    "ok": true,
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```


### Update a language
URL: localhost:4000/languages/update
Type of request: POST
Body: {language:'Chinese', newLanguage:'Cantonese'}

Response:
```
{
    "ok": true,
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```

As you can see with languages there is nothing special about them, we just work with the DB records as usual. 

However, with the words it will be different, since every word will have not just it's value but also a reference to a language from the languages collection to which it belongs. 

Let's create English and Japanese languages in the languages collection and add some words which will be referencing them. 


## Working with words:

### Add a word
URL: localhost:4000/words/new
Type of request: POST
Body: {word:'Hello', lang_id:'64008a4b03c39f62332372ab'}

Response:
```
{
    "ok": true,
    "data": {
        "language_id": "64008a4b03c39f62332372ab",
        "word": "Hello",
        "_id": "64008b7a2eb6fc082b38115b",
        "__v": 0
    }
}
```

As you can see, to create a new word we pass the word itself and the `_id` of a language we want it to refer to. This `_id` was assigned when we added a language into the languages collection. 


### See all words
URL: localhost:4000/words/
Type of request: GET

Response:
```
{
    "ok": true,
    "data": [
        {
            "_id": "64008b7a2eb6fc082b38115b",
            "language_id": {
                "_id": "64008a4b03c39f62332372ab",
                "language": "English",
                "__v": 0
            },
            "word": "Hello",
            "__v": 0
        }
    ]
}
```

As you can see in response, we have a word Hello with 'language_id' displaying id of the language this word refers to _and_ the name of the language 'English'. 

This is possible because we used `.populate('language_id')` in the `findAllWords` controller. Populate finds the record referenced and gets it's value to inject into the current record returned. 

So no what we have achieved is clear separation of data -- words are in 'words' collection and languages are in 'languages' collection. And every word refers to a language it belongs to. 