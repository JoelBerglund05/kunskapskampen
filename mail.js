
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const result = document.getElementById('result');
    const email = document.getElementById('email').value;
    result.textContent = '';

    if(validateEmail(email)){
        result.textContent = `${email} is valid`;
        result.style.color = 'green';
    }
    else {
        result.textContent = `${email} is invalid`;
        result.style.color = 'red';
    }
    return false;
}

document.getElementById('email').addEventListener('input', validate)

