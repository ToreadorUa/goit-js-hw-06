const formEl = document.querySelector('form.login-form');

const onSubmit = (el) => {
    el.preventDefault();
    if (formEl.elements.email.value === "" || formEl.elements.password.value === "") 
       return alert('Должны быть заполнены все поля!');
    const values = {
        [formEl.elements.email.name]: [formEl.elements.email.value],
        [formEl.elements.password.name]: [formEl.elements.password.value]
    }
    console.log(values);
    el.target.reset();
    
}
    
formEl.addEventListener('submit', onSubmit);
