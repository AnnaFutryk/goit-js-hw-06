const input = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

input.addEventListener('input', onInputChange);

function onInputChange() {
    textEl.style.fontSize = input.value + 'px';
}