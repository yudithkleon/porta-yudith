/* ══════════════════════════════════════════════
   main.js — Yudith León Portfolio
   ══════════════════════════════════════════════ */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
  
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


/* ─── 2. FILTRO DE PROYECTOS ─────────────────── */

const tabButtons   = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

tabButtons.forEach((tab) => {
  tab.addEventListener('click', () => {

    // — Actualizar tab activo —
    tabButtons.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    projectCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;

      if (matches) {
        // Mostrar: primero hacemos visible, luego animamos
        card.style.display = 'block';
        // Pequeño timeout para que el display:block tome efecto antes del transition
        requestAnimationFrame(() => {
          card.style.opacity   = '1';
          card.style.transform = 'scale(1)';
        });
      } else {
        // Ocultar: animamos primero, luego ponemos display:none
        card.style.opacity   = '0';
        card.style.transform = 'scale(0.95)';
        card.style.transition = 'opacity 0.3s, transform 0.3s';

        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});


/* ─── 3. NAVBAR: SOMBRA AL HACER SCROLL ─────── */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


/* ─── 4. FORMULARIO DE CONTACTO ──────────────── */

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('.btn-submit');

    // — Feedback de éxito —
    submitBtn.textContent        = '¡Mensaje enviado! ✓';
    submitBtn.style.background   = '#22C55E';
    submitBtn.style.color        = '#fff';
    submitBtn.style.pointerEvents = 'none';

    // — Resetear después de 3 segundos —
    setTimeout(() => {
      submitBtn.textContent        = 'Enviar mensaje ✦';
      submitBtn.style.background   = '';
      submitBtn.style.color        = '';
      submitBtn.style.pointerEvents = '';
      this.reset();
    }, 3000);
  });
}
