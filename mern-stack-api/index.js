require('./db')
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
var postMessageRoutes = require('./controllers/postMessageController')



app.use(bodyParser.json())
const port = 4000

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/postMessages', postMessageRoutes)