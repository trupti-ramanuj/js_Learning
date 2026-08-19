# Project related to Dom

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-4dniuxfr?embed=1&file=1-colorChanger%2Findex.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});


```

## project 2 solution

```javascript
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
```

## project 3 solution code

```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
