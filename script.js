function sendMail(){
    let parms = {
        name : document.getElementById("contact-form-4-name").value,
        email : document.getElementById("contact-form-4-email").value,
        message : document.getElementById("contact-form-4-message").value,
    }
    email.send("service_yvnel4u","template_xln7krf",parms).then(alert("Email Sent!!"))
}