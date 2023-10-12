const rpio = require('rpio')
const express = require('express')
const path = require('path')

const app = express()
const public = path.join(__dirname, '../public')
const views = path.join(__dirname, '../views')

const PORT = 3000

app.use(express.json())
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.set('view engine', 'hbs')
app.set('views', views)
app.use(express.static(public))

const lights_pin = 16
const fan_pin = 18
rpio.open(lights_pin, rpio.OUTPUT, rpio.LOW)
rpio.open(fan_pin, rpio.OUTPUT, rpio.LOW)

app.get('', (req, res) => {
    res.render('index')
})

app.get('/lights', (req, res) => {
    const { command } = req.body
    rpio.write(lights_pin, !rpio.read(lights_pin))
    const state = (rpio.read(lights_pin)) ? 'on' : 'off'
    const message = "Lights turned to " + state
    res.status(200).send({ status: "no error" , message})
})

app.get('/fan', (req, res) => {
    rpio.write(fan_pin, !rpio.read(fan_pin))
    const state = (rpio.read(fan_pin)) ? 'on' : 'off'
    const message = "fan turned to " + state
    res.status(200).send({ status: "no error" , message})
})

app.listen(PORT, (req, res) => {
    console.log("listening on port ", PORT)
})
