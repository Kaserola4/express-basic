// Usando objeto express
const express = require('express')
// App de express
const app = express()
// puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX!')
})
// Respondiendo un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'Kas', msg: 'Hello'}
    res.send(explorer)
})

// Query params: recibir parámetros por la url
// localhost:3000/explorers/kas
// req.params = {"explorerName": "kas"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})