const InputElement = document.getElementById('name-input');
const OutputElement = document.getElementById('name-output');

InputElement.addEventListener('input', () => {

    const trimmedElement = InputElement.value.trim(); 

    if (trimmedElement === '') {
        OutputElement.textContent = 'Anonymous'; 
    } else {
        OutputElement.textContent = trimmedElement; 
    }

});
