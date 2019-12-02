const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')

// msgOne.textContent = ''
// msgTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const url = `/weather?address=${location}`

    msgOne.textContent = 'Running...'
    msgTwo.textContent = ''

    fetch(url).then((respond) => {
        respond.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                msgOne.textContent = data.error
            } else {
                console.log(data.location)
                console.log(data.forecast)
                msgOne.textContent = data.location
                msgTwo.textContent = data.forecast
            }
        })
    })
})