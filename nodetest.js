const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

//파라마스 방식(메개변수랑 비슷)
app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q)
    res.send({'sound': '멍멍'})
})  //:이후말은 req.params로 입력됨

//쿼리문 연습

app.get('/user/:id', (req, res) => {
    const q = req.q
    console.log(q)
    res.send({'sound': '멍멍'})
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    if(name == "dog"){
        res.send({'sound': '멍멍'})
    }
    else if(name =="cat"){
        res.send({'sound': '야옹'})
    }
})


