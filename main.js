const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPsw = document.getElementById('check-psw');

phoneNumber.addEventListener('keyup', function() {
    let txt = this.value;
    console.log(txt)
    phoneNumber.setAttribute('maxlength', '12');
    if (txt.length == 3 || txt.length == 7) {
        this.value = this.value + " ";
        
    }
});

function validatePassword() {
    if (password.value !== confirmPsw.value) {
        confirmPsw.setCustomValidity("Passwords Don't Match");
    } else {
        confirmPsw.setCustomValidity('')
    }
}

password.onchange = validatePassword;
confirmPsw.onkeyup = validatePassword;