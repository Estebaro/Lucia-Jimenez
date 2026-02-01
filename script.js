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
// Menú de Accesibilidad
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = navLinks.querySelectorAll('a');

toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
});

// Cerrar al hacer click en un link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
    });
});

    // Funciones de accesibilidad
    document.getElementById('increase-font').addEventListener('click', function() {
        body.classList.remove('accessibility-font-small');
        body.classList.add('accessibility-font-large');
    });

    document.getElementById('decrease-font').addEventListener('click', function() {
        body.classList.remove('accessibility-font-large');
        body.classList.add('accessibility-font-small');
    });

    document.getElementById('high-contrast').addEventListener('click', function() {
        body.classList.remove('accessibility-low-contrast', 'accessibility-grayscale');
        body.classList.add('accessibility-high-contrast');
    });

    document.getElementById('low-contrast').addEventListener('click', function() {
        body.classList.remove('accessibility-high-contrast', 'accessibility-grayscale');
        body.classList.add('accessibility-low-contrast');
    });

    document.getElementById('grayscale').addEventListener('click', function() {
        body.classList.remove('accessibility-high-contrast', 'accessibility-low-contrast');
        body.classList.add('accessibility-grayscale');
    });

    document.getElementById('reset-accessibility').addEventListener('click', function() {
        body.classList.remove('accessibility-high-contrast', 'accessibility-low-contrast', 'accessibility-grayscale', 'accessibility-font-large', 'accessibility-font-small');
    });
});
// script.js - Código JavaScript consolidado para index.html

// Menú de Accesibilidad
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('accessibility-toggle');
    const panel = document.getElementById('accessibility-menu');
    const closeBtn = document.getElementById('close-accessibility');
    const body = document.body;

    // Toggle panel
    toggle.addEventListener('click', function() {
        const isHidden = panel.getAttribute('aria-hidden') === 'true';
        panel.setAttribute('aria-hidden', !isHidden);
    });

    closeBtn.addEventListener('click', function() {
        panel.setAttribute('aria-hidden', 'true');
    });

    // Funciones de accesibilidad
    document.getElementById('increase-font').addEventListener('click', function() {
        body.classList.remove('accessibility-font-small');
        body.classList.add('accessibility-font-large');
    });

    document.getElementById('decrease-font').addEventListener('click', function() {
        body.classList.remove('accessibility-font-large');
        body.classList.add('accessibility-font-small');
    });

    document.getElementById('high-contrast').addEventListener('click', function() {
        body.classList.remove('accessibility-low-contrast', 'accessibility-grayscale');
        body.classList.add('accessibility-high-contrast');
    });

    document.getElementById('low-contrast').addEventListener('click', function() {
        body.classList.remove('accessibility-high-contrast', 'accessibility-grayscale');
        body.classList.add('accessibility-low-contrast');
    });

    document.getElementById('grayscale').addEventListener('click', function() {
        body.classList.remove('accessibility-high-contrast', 'accessibility-low-contrast');
        body.classList.add('accessibility-grayscale');
    });

    document.getElementById('reset-accessibility').addEventListener('click', function() {
        body.classList.remove('accessibility-high-contrast', 'accessibility-low-contrast', 'accessibility-grayscale', 'accessibility-font-large', 'accessibility-font-small');
    });

    // Aquí puedes agregar más funcionalidades JS si es necesario, como validación de formularios, animaciones, etc.
    // Ejemplo: Validación básica del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Lógica para enviar por WhatsApp o Correo (puedes integrar APIs aquí)
            const servicio = document.getElementById('servicio').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Ejemplo: Enviar por WhatsApp (abre WhatsApp con mensaje prellenado)
            const whatsappUrl = `https://wa.me/50683881111?text=Hola, soy ${name}. Servicio: ${servicio}. Email: ${email}. Mensaje: ${message}`;
            window.open(whatsappUrl, '_blank');
            
            // Para Correo: window.location.href = `mailto:tuemail@ejemplo.com?subject=Consulta&body=${encodeURIComponent(message)}`;
        });
    }
});
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