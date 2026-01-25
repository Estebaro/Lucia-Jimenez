document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', e => {
        e.preventDefault();

        const name = encodeURIComponent(name.value);
        const service = encodeURIComponent(service.value);
        const message = encodeURIComponent(message.value);

        window.open(
            `https://wa.me/50683881111?text=Hola,%20soy%20${name}%20y%20deseo%20cotizar:%20${service}.%20${message}`,
            '_blank'
        );
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get("servicio");

    if (servicio) {
        const selectServicio = document.getElementById("servicio");
        if (selectServicio) {
            selectServicio.value = servicio;
        }
    }
});