const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validate = () => {
    const emailInput = document.querySelector('.email');
    const email = emailInput.value;
    const validIcon = document.getElementById('valid-icon');
    const invalidIcon = document.getElementById('invalid-icon');

    // Reset visibility of both icons
    validIcon.classList.add('hidden');
    invalidIcon.classList.add('hidden');

    if (email.length === 0) {
        // If input is empty, hide both icons
        return;
    }

    if (validateEmail(email)) {
        // Show valid icon
        validIcon.classList.remove('hidden');
    } else {
        // Show invalid icon
        invalidIcon.classList.remove('hidden');
    }
};

document.querySelector('.email').addEventListener('input', validate);
