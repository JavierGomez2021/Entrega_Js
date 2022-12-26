
//VARIABLES
let opcion
let seleccionado

//MAIN
do{    
    opcion = prompt("Desea realizar una simulacion\n 1 - SI\n 2 - NO")    
    opcion = parseInt(opcion)
    switch (opcion){
        case 1:
            alert("Bienvenido!!")
            break
        case 2:
            window.location.href = "adios.html";
            break
        default:
            alert("Opcion invalida!!")
            break
    }
}while (opcion != 2 && opcion != 1)

//FUNCIONES
function calcularPrecio(cuota)  
{   
    let checkbox1 = document.getElementById("cuotas1")
    let checkbox2 = document.getElementById("cuotas2")
    let checkbox3 = document.getElementById("cuotas3")

    document.getElementById('precioFinal').value = 0
    montoCompra = parseFloat(document.getElementById("montoCompra").value)
    
    if (isNaN(montoCompra) == true || montoCompra <= 0)
        {
            alert("El monto ingresado debe ser mayor a cero")  
            checkbox1.checked = false    
            checkbox2.checked = false    
            checkbox3.checked = false          
        }
    else
        {
            cuota = parseInt(cuota)
            switch(cuota)
                {
                    case 1:                                                
                        document.getElementById('precioFinal').value = montoCompra + (montoCompra * 0 / 100);  
                        checkbox2.checked = false    
                        checkbox3.checked = false                                         
                        break
                    case 2:
                        document.getElementById('precioFinal').value = montoCompra + (montoCompra * 5 / 100);    
                        checkbox1.checked = false    
                        checkbox3.checked = false    
                        break
                    case 3:
                        document.getElementById('precioFinal').value = montoCompra + (montoCompra * 10 / 100);    
                        checkbox1.checked = false    
                        checkbox2.checked = false    
                        break
                    default:
                        alert("Seleccione una opcion")
                        break
                }
        }
}


function verCompania(){
    let seleccionado = document.getElementById("tarjeta").value    

    if (seleccionado == "default"){
        document.getElementById("lblCuota1").innerHTML = ""    
        document.getElementById("lblCuota2").innerHTML = ""    
        document.getElementById("lblCuota3").innerHTML = ""    
    }

    if (seleccionado == "visa"){
        document.getElementById("lblCuota1").innerHTML = "Visa - 1 cuota  (Sin intereses)"    
        document.getElementById("lblCuota2").innerHTML = "Visa - 2 cuotas ( 5% intereses)"    
        document.getElementById("lblCuota3").innerHTML = "Visa - 3 cuotas (10% intereses)"    
    }

    if (seleccionado == "master"){
        document.getElementById("lblCuota1").innerHTML = "Master - 1 cuota  (Sin intereses)"    
        document.getElementById("lblCuota2").innerHTML = "Master - 2 cuotas ( 5% intereses)"    
        document.getElementById("lblCuota3").innerHTML = "Master - 3 cuotas (10% intereses)"    
    }

    if (seleccionado == "american"){
        document.getElementById("lblCuota1").innerHTML = "American - 1 cuota  (Sin intereses)"    
        document.getElementById("lblCuota2").innerHTML = "American - 2 cuotas ( 5% intereses)"    
        document.getElementById("lblCuota3").innerHTML = "American - 3 cuotas (10% intereses)"    
    }
    
}




    


 
