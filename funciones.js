$(document).ready(function() {
    $("#formulario-inicio-sesion").submit(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe a través del navegador

        var usuario = $("#usuario").val();
        var contrasena = $("#contrasena").val();

        if (usuario === "Euris" && contrasena === "829570") {
            // Ajusta la URL para que apunte a la ubicación correcta de index.html
            window.location.href = "principal/index.html"; 
        } else {
            $("#mensaje-error").show();
        }
    });
});

