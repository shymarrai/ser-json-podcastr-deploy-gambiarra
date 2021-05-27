const express = require('express')
const app = express()
const fileAPI = require('./db.json')

console.log(fileAPI)

app.use('/', (req,res) => {
  return res.json(fileAPI)
})

app.listen(3333, () => console.log('SERVER IS RUNNING'))