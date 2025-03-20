document.addEventListener("DOMContentLoaded", function () {
    const mail = document.getElementById("email");
    const mailBtn = document.getElementById("subBtn");
    const error = document.getElementById("errorMsg");

    if (mailBtn) {
        mailBtn.onclick = function () {
            let email = mail.value.trim();
            let valid = isValidEmail(email);

            if (valid) {
                localStorage.setItem("userEmail", email); 
                window.location.href = "success.html";
            } else if (email.length === 0) {
                error.textContent = "Valid Email Required";
                error.style.display = "block";
                mail.style.borderColor = "red";
                mail.style.backgroundColor = "#ffe6e6";
            } else {
                window.location.href = "failed.html";
            }
        };
    }

    
    const nextMail = document.getElementById("successEmail");
    if (nextMail) { 
        let nextEmail = localStorage.getItem("userEmail");
        if (nextEmail) {
            nextMail.textContent = nextEmail;
        }
    }
});

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
