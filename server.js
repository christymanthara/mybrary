if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const IndexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit:'10mb', extended: false}))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:true})
const db = mongoose.connection
db.on('error', error => console.error(error))

db.once('open', () => console.log('Connected to mongoose'))

app.use('/',IndexRouter) //using it on root
app.use('/authors',authorRouter) //using /author with everything in authors. means we are prepending
app.use('/books',bookRouter)

app.listen(process.env.PORT || 3000)