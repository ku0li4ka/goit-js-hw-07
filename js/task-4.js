const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) 
{
    event.preventDefault(); 

    const emailElement = this.elements.email.value.trim();
    const passwordElement = this.elements.password.value.trim();

    if (emailElement === '' || passwordElement === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailElement,
        password: passwordElement
    };

    console.log(formData);

    this.reset();
    
});

