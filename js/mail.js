
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const result = document.getElementById('result');
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    emailInput.textContent = '';

    emailInput.style.textDecoration = 'underline';

    if(validateEmail(email)){
        result.textContent = `${email} is valid`;
        result.style.color = 'oklch( 70% 0.1776 141.88)';
        emailInput.style.textDecorationColor = `oklch( 70% 0.1776 141.88)` ;
    }
    else {
        result.textContent = `${email} is invalid`;
        result.style.color = 'oklch( 60% 0.1825 21.18)';
        emailInput.style.textDecorationColor = `oklch( 60% 0.1825 21.18)`;
    }
    return false;
}

document.getElementById('email').addEventListener('input', validate)


/*
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Ensure text has a decoration applied, like underline
    emailInput.style.textDecoration = 'underline';

    if (validateEmail(email)) {
        emailInput.style.textDecorationColor = 'green'; // Valid decoration color
    } else {
        emailInput.style.textDecorationColor = 'red'; // Invalid decoration color
    }

    return false; // Prevent default form submission for testing
};

// Attach event listener to validate the input on every change
document.getElementById('email').addEventListener('input', validate);*/