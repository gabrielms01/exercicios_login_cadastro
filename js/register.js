document.querySelector("form").addEventListener("submit", event => {
    console.log("efetuando cadastro...")

    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let password1 = document.getElementById("password");
    let password2 = document.getElementById("password2");

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://52.91.139.190/fsapi/users/auth/register-jwt", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            document.getElementById("register-success").innerHTML = 'Seu cadastro foi realizado '+ json.user.name;
        }
    };
    xhttp.send(JSON.stringify({
        "email": email.value,
        "name": name.value,
        "password": password1.value,
        "confirma_password": password2.value
    }));

    event.preventDefault()
})