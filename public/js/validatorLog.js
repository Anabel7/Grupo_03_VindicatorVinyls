window.addEventListener("load", function () {
  let formularioLogin = document.querySelector("form.loginform");
  // const db = require("../../src/database/models")
  formularioLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Testeando")

    let errores = [];
    let campoMail = document.querySelector("#email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (campoMail.value == "") {
      errores.push("Debes ingresar un correo electrónico");
    } else if (!emailRegex.test(campoMail.value)) {
      errores.push(
        "Por favor, ingresa una dirección de correo electrónico válida."
      );
    }
    // db.User.findOne({ where: { email: correito } })
    // .then(usuario => {
    //     if (!usuario) {
    //         errores.push("Este correo electrónico no está registrado en nuestra base de datos. ¿No estarás intentando crear una cuenta nueva?");
    //     }
    // })
    console.log(formularioLogin)
    let campoPW = document.querySelector("#contra");
    if (campoPW.value == "") {
      errores.push("¿Te olvidaste de colocar una contraseña?");
    } else if (campoPW.value.length < 8) {
      errores.push("Ninguna contraseña tiene tan pocos caracteres");
    }
    // let countersign = campoPW.value;
    // db.User.findOne({ where: { password: countersign } }).then((usuario) => {
    //   if (!usuario) {
    //     errores.push("Contraseña erronea");
    //   }
    // })

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores2 ul");
      ulErrores.innerHTML = "" //Desaparece los errores previos
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    } else {
      // Se puede enviar el formulario
      formularioLogin.submit();
  }
  });
});
