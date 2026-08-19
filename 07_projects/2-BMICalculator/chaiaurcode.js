const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    }
    // else if (weight < 18.6) {
    //     weight.innerHTML = `Under Weight ${result}`
    // } else if (weight === 18.6 || weight <= 24.9) {
    //     weight.innerHTML = `Normal Range ${result}`
    // }
    // else if (weight > 24.9) {
    //     weight.innerHTML = `Overweight ${result}`
    // }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        //show the result
        results.innerHTML = `<span>${bmi}</span>`

    }
    //     if (weight < 18.6) {
    //         weight.innerHTML = `Under Weight ${result}`
    //     } else if (weight === 18.6 ||  <= 24.9) {
    //         weight.innerHTML = `Normal Range ${result}`
    //     }
    //     else {
    //         weight.innerHTML = `Overweight ${result}`
    //     }
    // }



});
