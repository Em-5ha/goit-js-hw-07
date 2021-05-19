const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', (event) => {
    return (event.currentTarget.value === '') ? outputNameRef.textContent = 'незнакомец' :
    outputNameRef.textContent = event.currentTarget.value;
});

