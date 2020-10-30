const express = require('express')
const app = express()
const port = 8088

// Make sure you place body-parser before your CRUD handlers!
//app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/devices', (req, res) => {
  res.send('[{"id":1},{"id":2},{"id":3}]')
})

app.post('/devices', (req, res) => {
  console.log(req.body)
  res.send()
})

app.get('/getBaseURL', (req, res) => {
  res.send('http://baadal.ddns.net:12345')
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
