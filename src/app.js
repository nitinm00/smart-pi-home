var rpio = require('rpio')
const express = require('express')
const path = require('path')

var app = express()
const public_dir = path.join(__dirname, '../public')
const views = path.join(__dirname, '../views')

const PORT = 3000

app.use(express.json())
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.set('view engine', 'hbs')
app.set('views', views)
app.use(express.static(public_dir))

const lights_pin = 16
const fan_pin = 18
rpio.open(lights_pin, rpio.OUTPUT, rpio.HIGH) // GPIO HIGH is off for this relay board
rpio.open(fan_pin, rpio.OUTPUT, rpio.HIGH) 

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/lights', (req, res) => {
    const { command } = req.body
    rpio.write(lights_pin, rpio.read(lights_pin) ? rpio.LOW : rpio.HIGH)
    const state = (rpio.read(lights_pin)) ? 'on' : 'off'
    const message = "Lights turned to " + state
    res.status(200).send({ status: "no error" , message})
})

app.get('/fan', (req, res) => {
    rpio.write(fan_pin, rpio.read(fan_pin) ? rpio.LOW : rpio.HIGH)
    const state = (rpio.read(fan_pin)) ? 'off' : 'on'
    const message = "fan turned to " + state
    res.status(200).send({ status: "no error" , message})
})

app.listen(PORT, () => {
    console.log("listening on port ", PORT)
})
