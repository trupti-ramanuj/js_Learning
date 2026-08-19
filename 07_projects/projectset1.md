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
