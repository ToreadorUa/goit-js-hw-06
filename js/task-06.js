const inputEl = document.querySelector('#validation-input');

const onBlur = () => {
    Number(inputEl.dataset.length) === inputEl.value.length ? inputEl.className = "valid"
        : inputEl.className = "invalid"
    
}

inputEl.addEventListener('blur', onBlur);

