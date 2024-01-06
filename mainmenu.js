user = localStorage.getItem("user");
var balance = 2000;

var userWithdraw = 0;
var userDeposit = 0;
var userTransfer = 0;

document.getElementById("welcome_user").innerHTML = "Hola " + user + " elija la operación que desea realizar";

function logout()
{
    window.location.replace("index.html");
}

function view()
{
     document.getElementById("balance1").innerHTML = balance;
}


function withdraw()
{
    userWithdraw = prompt("Ingrese el monto que desea retirar");
    balance = balance - userWithdraw;
    document.getElementById("withdraw1").innerHTML = "Saldo actual = " + balance +"$";
}

function deposit()
{
    userDeposit = parseFloat(prompt("Ingrese el monto que desea depositar"));
    balance =  balance +  userDeposit;
 
    document.getElementById("deposit1").innerHTML = "Saldo actual = " + balance + "$";
}

function transfer()
{
 userTransfer = prompt("Ingrese la cuenta de destino a 5 digitos");
 if (userTransfer.length == 5);
 {
    total = prompt("Ingrese la cantidad que desea transferir");
    document.getElementById("transfer1").innerHTML = "Ha enviado " +total+ " a la cuenta " + userTransfer;
 }
    
}