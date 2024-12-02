
function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    if (password1 == "")
        alert("Please enter new password");
    else if (password2 == "")
        alert("Please enter confirm password")

    else if (password1 != password2) {
        alert("\nPasswords do not match: Please tyr again")
        return false;
    }

    else {
        alert("Password Match")
        return true
    }
}