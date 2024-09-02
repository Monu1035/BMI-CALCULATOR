const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'please give a valid height';
    } else if (weight === '' || height < 0 || isNaN(weight)) {
        results.innerHTML = 'please give a valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi <= 18.6) {
            message.innerHTML =" You Are Under Weight"
            
        }

        if (bmi >= 18.6 && 24.9) {
            message.innerHTML =" Your Weight Is Normal"
            
        }

        if (bmi >= 24.9) {
            message.innerHTML =" You Are Over Weight"
            
        }
    }

   
    
});