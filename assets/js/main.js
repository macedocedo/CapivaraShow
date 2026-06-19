/*===== MENU TOGGLE (mobile) =====*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

/*===== FECHAR MENU AO CLICAR NO LINK =====*/
document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

/*===== SCROLL SPY - destaca link ativo conforme seção visível =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop    = section.offsetTop - 90;
        const sectionHeight = section.offsetHeight;
        const sectionId     = section.getAttribute('id');
        const link = document.querySelector(`.nav_link[href="#${sectionId}"]`);

        if (!link) return;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*===== BOTÃO SCROLL UP =====*/
function handleScrollUp() {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (!scrollUpBtn) return;

    if (window.scrollY >= 350) {
        scrollUpBtn.classList.add('show-scroll');
    } else {
        scrollUpBtn.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', handleScrollUp);

/*===== REVEAL AO ROLAR (IntersectionObserver) =====*/
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
