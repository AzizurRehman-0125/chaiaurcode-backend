require('dotenv').config()
const express = require('express')
const app = express()
const port = 40001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('azizurrehman.com')
})
app.get('/login ',(req,res)=>{
    res.send('<h1>login into chai aur code day 1 in backend</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code ka combination</h2>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})