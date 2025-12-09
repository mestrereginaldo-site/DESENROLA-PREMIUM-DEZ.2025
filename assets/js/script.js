// Menu Mobile Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.textContent = '☰';
        });
    });
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('form-newsletter');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[name="email"]').value;
        
        // Simulação de envio - Você pode integrar com seu backend
        alert(`Obrigado por se inscrever! Em breve você receberá nossos artigos no email: ${email}`);
        this.reset();
        
        // Aqui você pode adicionar:
        // 1. Integração com Mailchimp API
        // 2. Envio para Google Sheets
        // 3. Conexão com seu CRM
    });
}

// Smooth Scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animar elementos ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.categoria-card, .artigo-card').forEach(el => {
    observer.observe(el);
});
