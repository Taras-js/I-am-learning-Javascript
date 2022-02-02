//Логика input c type='text'
const text = document.querySelector('.input__text');
const addInputText = document.querySelector('.list__input');
const inputText = (e) => {
    const value = e.target.value;
    const message = `<li>${value}</li>`;
    addInputText.insertAdjacentHTML('afterbegin', message);
}
text.addEventListener('click', inputText);

//Логика input c type='reset'
const inputReset = document.querySelector('.input-reset')
const resetText = () => {
    let text = document.querySelector('.input__text')
    text.value = '';
}
inputReset.addEventListener('click', resetText)

//Логика input c type='submit'
const submitText = document.querySelector('.input__submit');
const submitForms = () => {
    const text = document.querySelector('.input__text');
    const message = `<li>${text.value}</li>`;
    addInputText.insertAdjacentHTML('afterbegin', message);
}
submitText.addEventListener('click', submitForms);