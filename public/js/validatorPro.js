window.addEventListener("load", function () {
    let formularioProducto = document.querySelector("form.formCargarDatos");
    formularioProducto.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = [];
        let campoDisk = document.querySelector("#disco");
        if (campoDisk.value == "") {
            errores.push("Colocá el nombre del álbum")
        } else if (campoDisk.value.length < 5) {
            errores.push("Un disco no puede tener un nombre de menos de 5 caracteres")
        }

        let campoArtista = document.querySelector("#artista");
        if (campoArtista.value == "") {
            errores.push("Debes poner el nombre de la banda musical o artista")
        } else if (campoArtista.value.length < 5) {
            errores.push("El nombre debe superar los 5 caracteres")
        }

        let campoPrecio = document.querySelector("#precio");
        if (campoPrecio.value == null) {
            errores.push("Nada es gratis")
        }

        let campoAnio = document.querySelector("#anio");
        if (campoAnio.value == null) {
            errores.push("Debes poner la fecha estimada en la que el disco se publicó")
        }

        let campoDesc = document.querySelector("#descripcion");
        if (campoDesc.value == "") {
            errores.push("Describe el producto, aunque sea haciendo un copy de wikipedia")
        }

        let campoTrack = document.querySelector("#tracklist");
        if (campoTrack.value == "") {
            errores.push("Asegurate de mencionar las canciones que incluye el álbum")
        }

        let campoLabel = document.querySelector("#discografica");
        if (campoLabel.value == "") {
            errores.push("Escribe el nombre de alguna disquera")
        }

        let imagenInput = document.querySelector("#imagen");
        let archivo = imagenInput.files[0];

        if (archivo) {
            let extension = archivo.name.split('.').pop().toLowerCase();
            if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif') {
                return true;
            } else {
                errores.push("Por favor, seleccione un archivo de imagen válido (JPG, JPEG, PNG o GIF).");
                return false;
            }
        }
    });


    if (errores.length > 0) {
        e.preventDefault();
        let ulErrores = document.querySelector("div.errores2 ul");
        ulErrores.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }
    else {
        fetch("http://localhost:3001/api/products")
            .then((response) => response.json())
            .then((data) => {
                let productos = data.products;
                let productoExistente = productos.find(
                    (product) => {
                        return product.name === campoDisk.value;
                    }
                );
                if (productoExistente) {
                    e.preventDefault();
                    errores.push(
                        "Este producto ya está registrado en nuestra base de datos."
                    );
                    let ulErrores = document.querySelector("div.errores2 ul");
                    ulErrores.innerHTML = ""; // Limpiar los errores anteriores
                    for (let i = 0; i < errores.length; i++) {
                        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
                    }
                } else {
                    // Se puede enviar el formulario
                    formularioProducto.submit();
                }
            })
            .catch((error) => {
                console.error("Error al realizar la solicitud fetch:", error);
            });
    }
})