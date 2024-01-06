let cantidad = document.getElementById("cantidad");
cantidad.addEventListener('keyup', Convertir);

let moneda1 = document.getElementById("actual1");
moneda1.addEventListener('change', Convertir);
let moneda2 = document.getElementById("cambio1");
moneda2.addEventListener('change', Convertir);

let total;

function Convertir()
{
    
    if(cantidad.value == '')
    {
        return;
    }

    num = cantidad.value;
    num = parseFloat(num);
    console.log(num);
    

    if (moneda1.value == "CLP" && moneda2.value == "ARS"){
        total = (num * 0.91);
        document.getElementById("totalNuevo").innerHTML = total + " ARS" ;
    }
    if (moneda1.value == "CLP" && moneda2.value == "USD"){
        total = (num * 0.0011);
        document.getElementById("totalNuevo").innerHTML = total + " USD" ;
    }
    if (moneda1.value == "CLP" && moneda2.value == "GBP"){
        total = parseFloat(num * 0.00088);
        document.getElementById("totalNuevo").innerHTML = total + " GBP" ;
    }
    if (moneda1.value == "CLP" && moneda2.value == "TRY"){
        total = parseFloat(num * 0.033);
        document.getElementById("totalNuevo").innerHTML = total + " TRY" ;
    }
    if (moneda1.value == "USD" && moneda2.value == "CLP"){
        total = parseFloat(num * 889.95);
        document.getElementById("totalNuevo").innerHTML = total + " CLP" ;
    }  
    if (moneda1.value == "USD" && moneda2.value == "ARS"){
        total = parseFloat(num * 811.20);
        document.getElementById("totalNuevo").innerHTML = total + " ARS" ;
    }  
    if (moneda1.value == "USD" && moneda2.value == "GBP"){
        total = parseFloat(num * 0.79);
        document.getElementById("totalNuevo").innerHTML = total + " GBP" ;
    }  
    if (moneda1.value == "USD" && moneda2.value == "TRY"){
        total = parseFloat(num * 29.82);
        document.getElementById("totalNuevo").innerHTML = total + " TRY" ;
    }  
    if (moneda1.value == "ARS" && moneda2.value == "CLP"){
        total = parseFloat(num * 1.10);
        document.getElementById("totalNuevo").innerHTML = total + " CLP" ;
    }  
    if (moneda1.value == "ARS" && moneda2.value == "USD"){
        total = parseFloat(num * 0.0012);
        document.getElementById("totalNuevo").innerHTML = total + " USD" ;
    }  
}