const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

//tell express 把樣板引擎交給express-handlebars
app.engine('.hbs',engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
//載入靜態json
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/movies')
})




app.get('/movies', (req, res) => {
  res.render('index')
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id
  res.send(`This is movie ${id}`)
})

app.listen( port, (req, res) => {
  console.log(`this app is running on http://localhost:${port}`)
})