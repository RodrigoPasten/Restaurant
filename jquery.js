$(document).ready(function () {
    $('#reserva-form').submit(function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Captura los valores de los campos del formulario
        var nombre = $('#nombre-r').val();
        var correo = $('#correo-r').val();
        var telefono = $('#telefono-r').val();
        var fecha = $('#fecha-r').val();
        var hora = $('#hora-r').val();
        var cantidadAsistentes = $('#cantidad-asistentes-r').val();

        // Crea el mensaje de confirmación
        var mensaje = '¡Reserva realizada con éxito!\n\n';
        mensaje += 'Nombre: ' + nombre + '\n';
        mensaje += 'Correo: ' + correo + '\n';
        mensaje += 'Teléfono: ' + telefono + '\n';
        mensaje += 'Fecha: ' + fecha + '\n';
        mensaje += 'Hora: ' + hora + '\n';
        mensaje += 'Cantidad de asistentes: ' + cantidadAsistentes;

        // Muestra la alerta de confirmación
        alert(mensaje);
    });
});

$(document).ready(function () {
    $('.destacados .container > div').click(function () {
        var imagen = $(this);
        imagen.toggleClass('imagen-destacada');
        $('body').toggleClass('imagen-destacada-activo');
    });

    // Función para centrar la imagen destacada
    $(window).scroll(function () {
        if ($('body').hasClass('imagen-destacada-activo')) {
            var imagen = $('.imagen-destacada');
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var imagenHeight = imagen.outerHeight();
            var topOffset = (windowHeight - imagenHeight) / 2;

            if (scrollTop > topOffset) {
                imagen.css('top', scrollTop + topOffset);
            } else {
                imagen.css('top', topOffset);
            }
        }
    });
});



