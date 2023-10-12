console.log('client side javascript file is loaded')

const lightsButton = document.querySelector('#lightsButton')
const fanButton = document.querySelector('#fanButton')

lightsButton.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/lights').then((response) => {
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

    fetch('http://localhost:3000/fan').then((response) => {
        response.json().then((data) => {
            if (data.error) console.log(data.error)
            else {
                console.log(data)
            }
        })
    })
})