const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    return (event.currentTarget.value.length <= event.currentTarget.dataset.length) ?
        inputRef.classList.add('valid'):
        inputRef.classList.add('invalid');
})

inputRef.addEventListener('focus', () => {inputRef.classList.remove('valid', 'invalid')})
