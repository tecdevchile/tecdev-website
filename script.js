// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle del menú móvil
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navegación activa basada en scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Observador de intersección para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a elementos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .value-item, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Formulario de contacto con EmailJS
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validación básica
    if (!data.nombre || !data.email || !data.mensaje) {
        showNotification('Por favor, completa todos los campos requeridos.', 'error');
        return;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Por favor, ingresa un email válido.', 'error');
        return;
    }
    
    // Validar reCAPTCHA (solo en producción)
    if (typeof grecaptcha !== 'undefined' && window.location.protocol !== 'file:') {
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            showNotification('Por favor, completa el reCAPTCHA', 'error');
            return;
        }
    }
    
    // Mostrar estado de carga
    setLoadingState(true);
    
    try {
        // Configuración de EmailJS
        const templateParams = {
            from_name: data.nombre,
            from_email: data.email,
            company: data.empresa || 'No especificada',
            message: data.mensaje,
            to_name: 'Tecdev Team'
        };
        
        // Agregar reCAPTCHA response si está disponible
        if (typeof grecaptcha !== 'undefined') {
            templateParams['g-recaptcha-response'] = grecaptcha.getResponse();
        }
        
        // Enviar email usando EmailJS
        // Reemplaza con tus IDs reales de EmailJS
        await emailjs.send(
            'service_5vr1erj',    // Verifica que este ID sea correcto
            'template_kuf3e0s',   // Verifica que este ID sea correcto
            templateParams
        );
        
        // Éxito
        showNotification('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', 'success');
        contactForm.reset();
        
        // Resetear reCAPTCHA
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset();
        }
        
    } catch (error) {
        console.error('Error al enviar email:', error);
        showNotification('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error');
        
        // Resetear reCAPTCHA en caso de error
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset();
        }
    } finally {
        setLoadingState(false);
    }
});

// Función para manejar estado de carga
function setLoadingState(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
    } else {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
}

// Función para mostrar notificaciones
function showNotification(message, type) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Colores según el tipo
    if (type === 'success') {
        notification.style.backgroundColor = '#28a745';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc3545';
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto parallax sutil en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroGraphic = document.querySelector('.hero-graphic');
    const heroBefore = document.querySelector('.hero::before');
    
    if (hero && heroGraphic) {
        const rate = scrolled * -0.5;
        heroGraphic.style.transform = `translateY(${rate}px)`;
    }
    
    // Efecto parallax para la imagen de fondo (solo en desktop)
    if (hero && window.innerWidth > 768) {
        const bgRate = scrolled * -0.3;
        hero.style.setProperty('--bg-y', `${bgRate}px`);
    }
    
    // Actualizar navegación activa
    updateActiveNav();
});

// Lazy loading para imágenes (si las agregas en el futuro)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Función para agregar efectos de hover en dispositivos táctiles
function addTouchEffects() {
    const touchElements = document.querySelectorAll('.service-card, .btn, .nav-link');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Hero Carousel
class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 segundos
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Agregar event listeners a los indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Agregar event listeners a los controles
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
                this.goToSlide(prevIndex);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide();
            });
        }
        
        // Iniciar autoplay
        this.startAutoPlay();
        
        // Pausar autoplay cuando el usuario interactúa
        this.slides.forEach(slide => {
            slide.addEventListener('mouseenter', () => this.stopAutoPlay());
            slide.addEventListener('mouseleave', () => this.startAutoPlay());
        });
        
        // Agregar navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
                this.goToSlide(prevIndex);
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }
    
    goToSlide(index) {
        if (index === this.currentSlide) return;
        
        // Remover clases activas
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Remover clases activas de las imágenes de fondo
        const bgSlides = document.querySelectorAll('.hero-bg-slide');
        bgSlides[this.currentSlide].classList.remove('active');
        
        // Agregar clase prev al slide actual
        this.slides[this.currentSlide].classList.add('prev');
        
        // Actualizar slide actual
        this.currentSlide = index;
        
        // Agregar clases activas
        this.slides[this.currentSlide].classList.add('active');
        this.slides[this.currentSlide].classList.remove('prev');
        this.indicators[this.currentSlide].classList.add('active');
        
        // Activar imagen de fondo correspondiente
        bgSlides[this.currentSlide].classList.add('active');
        
        // Reiniciar autoplay
        this.restartAutoPlay();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    startAutoPlay() {
        if (this.autoPlayInterval) return;
        
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    restartAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Lazy Loading for Hero Images
class HeroImageLoader {
    constructor() {
        this.loadedImages = new Set();
        this.init();
    }
    
    init() {
        // Load first image immediately
        this.loadImage('images/hero/carousel-1.jpg');
        
        // Load other images when needed
        this.preloadImages();
    }
    
    loadImage(src) {
        if (this.loadedImages.has(src)) return;
        
        const img = new Image();
        img.onload = () => {
            this.loadedImages.add(src);
            this.applyBackground(src);
        };
        img.src = src;
    }
    
    applyBackground(src) {
        const slides = document.querySelectorAll('.hero-bg-slide');
        slides.forEach(slide => {
            if (slide.dataset.bg === src) {
                slide.style.backgroundImage = `url('${src}')`;
            }
        });
    }
    
    preloadImages() {
        const images = [
            'images/hero/carousel-2.jpg',
            'images/hero/carousel-3.jpg'
        ];
        
        images.forEach(src => {
            setTimeout(() => this.loadImage(src), 1000);
        });
    }
}

// Cookie Banner Management
class CookieBanner {
    constructor() {
        this.banner = document.getElementById('cookie-banner');
        this.acceptBtn = document.getElementById('accept-cookies');
        this.rejectBtn = document.getElementById('reject-cookies');
        this.cookieConsent = this.getCookieConsent();
        
        this.init();
    }
    
    init() {
        // Configurar Google Analytics con consentimiento por defecto
        this.setupGoogleAnalytics();
        
        if (!this.cookieConsent) {
            this.showBanner();
        } else {
            // Si ya hay consentimiento, aplicar la configuración
            if (this.cookieConsent === 'accepted') {
                this.enableAnalytics();
            } else {
                this.disableAnalytics();
            }
        }
        
        this.acceptBtn.addEventListener('click', () => this.acceptCookies());
        this.rejectBtn.addEventListener('click', () => this.rejectCookies());
    }
    
    setupGoogleAnalytics() {
        // Configurar Google Analytics con consentimiento por defecto
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    }
    
    showBanner() {
        setTimeout(() => {
            this.banner.classList.add('show');
        }, 1000);
    }
    
    hideBanner() {
        this.banner.classList.remove('show');
    }
    
    acceptCookies() {
        this.setCookieConsent('accepted');
        this.hideBanner();
        this.enableAnalytics();
    }
    
    rejectCookies() {
        this.setCookieConsent('rejected');
        this.hideBanner();
        this.disableAnalytics();
    }
    
    getCookieConsent() {
        return localStorage.getItem('cookie-consent');
    }
    
    setCookieConsent(status) {
        localStorage.setItem('cookie-consent', status);
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
    }
    
    enableAnalytics() {
        // Habilitar Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
            console.log('Google Analytics habilitado');
        }
    }
    
    disableAnalytics() {
        // Deshabilitar Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
            console.log('Google Analytics deshabilitado');
        }
    }
}

// Inicializar funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    addTouchEffects();
    updateActiveNav();
    
    // Inicializar carrusel
    new HeroCarousel();
    
    // Inicializar banner de cookies
    new CookieBanner();
    
    // Inicializar lazy loading de imágenes
    new HeroImageLoader();
    
    // Ocultar reCAPTCHA en desarrollo local
    if (window.location.protocol === 'file:') {
        const recaptchaElement = document.querySelector('.g-recaptcha');
        if (recaptchaElement) {
            recaptchaElement.style.display = 'none';
        }
    }
});

// Prevenir zoom en inputs en iOS
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// Mejorar rendimiento del scroll
let ticking = false;

function updateOnScroll() {
    updateActiveNav();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Función para validar formulario en tiempo real
function setupFormValidation() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remover clases de error previas
    field.classList.remove('error');
    
    // Validar según el tipo de campo
    if (field.hasAttribute('required') && !value) {
        field.classList.add('error');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    return true;
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
}

// Agregar estilos CSS para campos con error
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    .form-group input.error::placeholder,
    .form-group textarea.error::placeholder {
        color: #dc3545;
    }
`;
document.head.appendChild(errorStyles);

// Inicializar validación de formulario
document.addEventListener('DOMContentLoaded', setupFormValidation); 