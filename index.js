const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')))
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname + '/views/contact.html')))
app.get('/about', (req, res) => res.sendFile(path.join(__dirname + '/views/about.html')))
app.get('/religion', (req, res) => res.sendFile(path.join(__dirname + '/views/religion.html')))
app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
