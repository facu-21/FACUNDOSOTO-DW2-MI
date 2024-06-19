const botonRegistro = document.getElementById("botonRegistro");
const botonInicio = document.getElementById("botonInicio");
const botonCambio = document.getElementById("botonCambio");

let cuentas = [];

botonRegistro.addEventListener("click",function(){
    let nombre = prompt("Ingrese un nombre de usuario");
    let mail = prompt("Ingrese un mail");
    let correoExistente = false;

    for(let i=0;i<=cuentas.length-1;i++){
        if(mail == cuentas[i].mail){
            correoExistente = true;
        }
    }

    if(correoExistente){
        alert("El mail ingresado ya esta registrado.");
    }
    else{
        let pass = prompt("Ingrese una contraseña");

        if(nombre == "" || nombre == null || mail == "" || mail == null || pass == "" || pass == null){
            alert("Los datos ingresados no son válidos.");
        }
        else{
            cuentas.push({nombre:nombre, mail: mail, pass: pass});
            alert("Sus datos se han registrado correctamente.");
        }
    }
});

botonInicio.addEventListener("click",function(){
    let mail = prompt("Ingrese su mail");
    let pass = prompt("Ingrese su contraseña");
    let inicioExitoso = false;

    for(let i=0;i<=cuentas.length-1;i++){
        if(mail == cuentas[i].mail && pass == cuentas[i].pass){
            inicioExitoso = true;
            alert("Inicio de sesión exitoso, bienvenido de vuelta " + cuentas[i].nombre + ".");
        }
    }
    if(!inicioExitoso){
        alert("No se encontraron coincidencias con los datos ingresados.");
    }
});

botonCambio.addEventListener("click",function(){
    let mail = prompt("Ingrese su mail");
    let pass = prompt("Ingrese su contraseña");
    let inicioExitoso = false;

    for(let i=0;i<=cuentas.length-1;i++){
        if(mail == cuentas[i].mail && pass == cuentas[i].pass){
            inicioExitoso = true;
            alert("Inicio de sesión exitoso, bienvenido de vuelta " + cuentas[i].nombre + ".");
            let nuevaPass = prompt("Ingrese su nueva contraseña");
            if(nuevaPass == "" || nuevaPass == null){
                alert("La contraseña ingresada no es valida.");
            }
            else{
                cuentas[i].pass = nuevaPass;
                alert("El cambio se ha realizado exitosamente.");
            }
        }
    }
    if(!inicioExitoso){
        alert("No se encontraron coincidencias con los datos ingresados.");
    }
})