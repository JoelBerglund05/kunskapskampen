
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const result = document.getElementById('result');
    const email = document.getElementById('email').value;
    result.textContent = '';

    if(validateEmail(email)){
        result.textContent = `${email} is valid`;
        result.style.color = 'oklch( 70% 0.1776 141.88)';
    }
    else {
        result.textContent = `${email} is invalid`;
        result.style.color = 'oklch( 60% 0.1825 21.18)';
        email.style.color = 'oklch( 70% 0.1776 141.88)';
    }
    return false;
}

document.getElementById('email').addEventListener('input', validate)

