const text_area = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-desencriptado")
const mensajeError = document.getElementById('mensaje-error');
const copiarBoton = document.querySelector(".copiar");

function encriptar(text) {
    var reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    var text_encriptado = '';
    for (var i = 0; i < text.length; i++) {
        var caracter = text[i];
        text_encriptado += reemplazos[caracter] || caracter;
    }

    return text_encriptado;
}

function encriptarTexto() {
    const texto_encriptado = encriptar(text_area.value)
    mensaje.value = texto_encriptado;
    text_area.value = "";
    mensajeError.style.display = 'none';
    mensaje.style.backgroundImage = "none"
    copiarBoton.style.display = "block"
}

function desencriptar(text) {
    var reemplazos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    var text_desencriptado = '';
    for (var i = 0; i < text.length; i += 4) {
        var grupo = text.substr(i, 4);
        text_desencriptado += reemplazos[grupo] || grupo;
    }

    return text_desencriptado;
}

function desencriptarTexto() {
    const texto_encriptado = desencriptar(text_area.value)
    mensaje.value = texto_encriptado;
    text_area.value = "";
    mensajeError.style.display = 'none';
    mensaje.style.backgroundImage = "none"
    copiarBoton.style.display = "block"
}



copiarBoton.addEventListener("click", function() {
    mensaje.select();
    document.execCommand("copy");
});

function mostrarBotonCopiar() {
    btnCopiar.classList.remove('.copiar');
  }