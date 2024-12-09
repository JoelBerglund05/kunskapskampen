
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    emailInput.style.textDecoration = 'underline';
    emailInput.style.borderColor = 'border';



    if (validateEmail(email)){
        emailInput.style.textDecorationColor = `oklch( 70% 0.1776 141.88)`;
        emailInput.style.border = `3px solid green`
    }

    else {
        emailInput.style.textDecorationColor = `oklch( 60% 0.1825 21.18)`;
        emailInput.style.border = `3px solid red`
    }
    return false;
}

/*if (length(email)> 1) {  gör så att den blir normal om inget har srivits / om texten tagits bort
    console.log("jawdoi")
}*/

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