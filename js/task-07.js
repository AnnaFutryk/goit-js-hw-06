const input = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textEl.style.fontSize = input.value + 'px';

input.addEventListener('input', onInputChange);

function onInputChange() {
    textEl.style.fontSize = input.value + 'px';;
}

