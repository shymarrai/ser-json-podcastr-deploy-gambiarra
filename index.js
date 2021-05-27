const express = require('express')
const app = express()
const fileAPI = require('./db.json')

console.log(fileAPI)

app.use('/', (req,res) => {
  //res.send('index.html')
  return res.json(fileAPI)
})

app.listen(process.env.PORT || 3333, () => console.log('SERVER IS RUNNING'))