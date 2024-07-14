const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/movies')
})


app.get('/movies', (req, res) => {
  res.send('Listing movies')
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id
  res.send(`This is movie ${id}`)
})

app.listen( port, (req, res) => {
  console.log(`this app is running on http://localhost:${port}`)
})