document.addEventListener("DOMContentLoaded", () => {
    // Obtener todos los botones "Ver Certificado"
    const viewButtons = document.querySelectorAll('[data-bs-target="#certModal"]');

    // Agregar un evento click a cada botón
    viewButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Obtener la URL del certificado desde el atributo data-cert
            const certUrl = button.getAttribute("data-cert");

            // Asignar la URL al elemento img del modal
            const certImage = document.getElementById("certImage");
            if (certImage) {
                certImage.src = certUrl;
            } else {
                console.error("El elemento con ID 'certImage' no fue encontrado.");
            }
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});