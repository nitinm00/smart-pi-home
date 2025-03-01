console.log('client side javascript file is loaded')

const lightsButton = document.querySelector('#lightsButton')
const fanButton = document.querySelector('#fanButton')

const ip = window.location.hostname
const port = window.location.port
lightsButton.addEventListener('click', (e) => {
    e.preventDefault()

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

    fetch(`http://${ip}:${port}/fan`).then((response) => {
        response.json().then((data) => {
            if (data.error) console.log(data.error)
            else {
                console.log(data)
            }
        })
    })
})
