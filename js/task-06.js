const input = document.getElementById('validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const validLength = input.dataset.length;
    const inputValueLength = input.value.length;
    
    if (inputValueLength === Number(validLength)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    };
}
