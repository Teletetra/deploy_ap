const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res)=>{
    res.send('gaurav_kumar')
})

app.get('/login',(req,res)=>{
    res.send('<h1>lets get into admin</h1>')
})

app.get('/mytube',(req,res)=>{
    res.send('<h1>mytube.com</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(` successful Example app listening on port ${port}`)
})