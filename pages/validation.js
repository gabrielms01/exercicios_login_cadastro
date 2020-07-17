document.querySelector("form").addEventListener("submit", event => {
    console.log("efetuando login...")

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "tlopes@gmail.com" && password.value == "123456") {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://52.91.139.190/fsapi/users/login", true);
        xhttp.setRequestHeader("Content-type", "application/json");

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                document.getElementById("welcome").innerHTML = 'Bem-vindo '+ json.user.name;
            }
        };
       
        xhttp.send(JSON.stringify({
            "email": email.value,
            "password": password.value
        }));
        
       event.preventDefault()
    }
    
})