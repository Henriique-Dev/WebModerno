const express = require('express')
const app = express()
const badyParser = require('body-parser')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns. Usuário Incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})


app.listen(3003)