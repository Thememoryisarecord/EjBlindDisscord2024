
var defaultUser = "Dan";
var defaultPassword = "Discord2024";




var contador = 1;

function send() {

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    
    if ( defaultUser == user && defaultPassword == password) 
    {
        user = localStorage.getItem("user");
        window.location = "menu.html";
        
   
    } else 
    {

        if (contador == 3)
        {
            document.getElementById("user").value = "";
            document.getElementById("password").value = "";  

            alert("Intentos agotados");
        
        } 
        else {
        
        if (contador <=3)

        {
            
            document.getElementById("user").value = "";
            document.getElementById("password").value = "";

            alert("Usuario y password no coinciden con el sistema");  
        } 
        contador++;
    }        
        
    }   

    }
