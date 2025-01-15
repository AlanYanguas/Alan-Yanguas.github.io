<script>
// Animación suave para el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de typing para el título principal
function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Aplicar el efecto al cargar la página
window.onload = function() {
    const title = document.querySelector('header h1');
    typeWriter(title, 'Hola, soy Alan', 100);
};

// Animación para los proyectos
const proyectos = document.querySelectorAll('.proyecto');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

proyectos.forEach(proyecto => {
    proyecto.style.opacity = '0';
    proyecto.style.transform = 'translateY(50px)';
    proyecto.style.transition = 'all 0.6s ease-out';
    observer.observe(proyecto);
});
</script>
// Efecto de typing para el título principal
function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Aplicar el efecto al cargar la página
window.onload = function () {
    const title = document.querySelector('#main-title');
    typeWriter(title, 'Hola, soy Alan', 100);
};

// Animación suave para el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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
