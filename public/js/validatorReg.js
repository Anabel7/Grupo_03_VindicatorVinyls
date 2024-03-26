window.addEventListener("load", function () {
  let formularioRegistro = document.querySelector("form.register");
  console.log(formularioRegistro);

  formularioRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    let errores = [];
    let campoNombre = document.querySelector("#nombre");
    if (campoNombre.value == "") {
      errores.push("No seas tímid@, dinos tu nombre :D");
    } else if (campoNombre.value.length < 2) {
      errores.push("¿Existe un nombre tan corto? Pon tu apellido entonces x_x");
    }

    let campoUser = document.querySelector("#usuario");
    if (campoUser.value == "") {
      errores.push("Te olvidaste de ponerte un nombre cool de usuario");
    } else if (campoUser.value.length < 5) {
      errores.push(
        "Los usuarios cool tienen un nombre de usuario de más de 5 caracteres"
      );
    }

    let campoMail = document.querySelector("#email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (campoMail.value == "") {
      errores.push(
        "Prometemos no mandarte spam, confianos un correo electrónico para validar tu cuenta :D"
      );
    } else if (!emailRegex.test(campoMail.value)) {
      errores.push(
        "Por favor, ingresa una dirección de correo electrónico válida."
      );
    }

    let campoPW = document.querySelector("#password");
    if (campoPW.value == "") {
      errores.push("Necesitas una contraseña");
    } else if (campoPW.value.length < 8) {
      errores.push("Tu contraseña debe tener un mínimo de 8 caracteres");
    }
    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores2 ul");
      ulErrores.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    } else {
      fetch("http://localhost:3001/api/users")
        .then((response) => response.json())
        .then((data) => {
            let users = data.users;
            let usuarioExistente = users.find(
                (user) => {
                    return user.email === campoMail.value;
                }
            );
            if (usuarioExistente) {
                errores.push(
                    "Este correo electrónico ya está registrado en nuestra base de datos."
                );
                let ulErrores = document.querySelector("div.errores2 ul");
                ulErrores.innerHTML = ""; // Limpiar los errores anteriores
                for (let i = 0; i < errores.length; i++) {
                    ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
                }
            } else {
                // Se puede enviar el formulario
                formularioRegistro.submit();
            }
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud fetch:", error);
        });
    }
  });
});
