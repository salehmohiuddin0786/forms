function generateCaptcha() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('captchaText').innerText = captcha;
}

function validateForm() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let captchaText = document.getElementById('captchaText').innerText;
    let captchaInput = document.getElementById('captchaInput').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (captchaText !== captchaInput) {
        alert('Captcha incorrect!');
        return;
    }
    
    alert('Registration Successful!');
}

document.getElementById('captchaInput').addEventListener('input', function () {
    document.getElementById('submitButton').disabled = this.value !== document.getElementById('captchaText').innerText;
});

function togglePassword(fieldId) {
    let input = document.getElementById(fieldId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

generateCaptcha();