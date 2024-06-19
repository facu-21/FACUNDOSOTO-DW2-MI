let nombre;
let mail;
let contrasenia;

function registrarUsuario(){
    nombre = prompt("Ingrese su nombre de usuario");
    mail = prompt("Ingrese su mail");
    contrasenia = prompt("Ingrese su contraseña");
    alert("Se ha registrado exitosamente");
}

function iniciarSesion(){
    let mailIn = prompt("Ingrese su mail");
    if(mailIn == mail){
        let contraseniaIn = prompt("Ingrese su contrasenia");
        if(contraseniaIn == contrasenia){
            alert("Inicio de sesión exitoso, ¡Bienvenido " + nombre + "!");
        }
        else{
            alert("Contraseña incorrecta");
        }
    }
    else{
        alert("Mail no identificado");
    }
}

function actualizarContrasenia(){
    let mailIn = prompt("Ingrese su mail");
    if(mailIn == mail){
        let contraseniaIn = prompt("Ingrese su contrasenia");
        if(contraseniaIn == contrasenia){
            contrasenia = prompt("Ingrese su nueva contrasenia");
            alert("Se ha realizado el cambio exitosamente");
        }
        else{
            alert("Contraseña incorrecta");
        }
    }
    else{
        alert("Mail no identificado");
    }
}

registrarUsuario();