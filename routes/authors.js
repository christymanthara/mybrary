const express = require('express');
const router = express.Router()
const Author = require('../models/author') //accessing the author model

//All authors route
router.get('/',async(req,res) =>{
    let searchOptions = {}
    if(req.query.name !== null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name,'i')
    }

try {
    const authors =await Author.find(searchOptions)
    res.render('authors/index',{
        authors: authors, 
        searchOptions:req.query

    })
} catch  {
    res.redirect('/')
}    
})

//New author route
router.get('/new',(req,res) =>{
    res.render('authors/new', {author: new Author() })
})

//creating the author
router.post('/', async(req,res)=> {
    const author = new Author({
        name:req.body.name
    })
    try {
        const newAuthor = await author.save();
        res.redirect('authors');
        // res.redirect('authors'/$(newAuthor.id));
    } catch (err) {
        res.render('authors/new', {
            author: author, // repopulating whatever the user created to the field
            errorMessage: 'Error creating author'
        });
    }
});


module.exports = router