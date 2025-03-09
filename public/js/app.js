import React, { useState, useEffect } from 'react';
import SocketIO from 'socket.io-client'

console.log('client side javascript file is loaded')

const lightsButton = document.querySelector('#lightsButton')
const fanButton = document.querySelector('#fanButton')

const ip = window.location.hostname
const port = window.location.port
lightsButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(`lights button pressed from ip: ${ip} and port ${port}`)
    fetch(`http://${ip}:${port}/lights`).then((response) => {
        response.json().then((data) => {
            if (data.error) console.log(data.error)
            else {
                console.log(data)
            }
        })
    })
})

fanButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(`fan button pressed from ip: ${ip} and port ${port}`)
    fetch(`http://${ip}:${port}/fan`).then((response) => {
        response.json().then((data) => {
            if (data.error) console.log(data.error)
            else {
                console.log(data)
            }
        })
    })
})

const [data, setData] = useState([])
useEffect(() => {
    const socket = socketIOClient("http://0.0.0.0:3000/")
    socket.on("updateSensorData", (data) => {
        setData(data)
    })
}, [])