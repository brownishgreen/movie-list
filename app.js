const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const movies = require('./public/jsons/movies.json').results
//宣告統一變數的URL
const BASE_IMG_URL = 'https://movie-list.alphacamp.io/posters/'

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
  res.render('index', { movies, BASE_IMG_URL }) //{ movies, BASE_IMG_URL } 是一個物件，表示將這些變數傳遞給 index 模板
})

app.get('/movie/:id', (req, res) => {
  const id = req.params.id
  const movie = movies.find((mv) => mv.id.toString() === id)
  res.render('detail', { movie, BASE_IMG_URL })
})

app.listen( port, (req, res) => {
  console.log(`this app is running on http://localhost:${port}`)
})