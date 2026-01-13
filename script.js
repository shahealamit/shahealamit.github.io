// Initialize AOS (Animate On Scroll)
AOS.init({ once: true, offset: 50, duration: 800 });

// Mobile Menu Toggle
document.getElementById('mobile-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Filter Projects
function filterProjects(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-teal-500', 'text-white', 'border-teal-500');
        b.classList.add('border-slate-700', 'text-slate-400');
    });
    btn.classList.remove('border-slate-700', 'text-slate-400');
    btn.classList.add('bg-teal-500', 'text-white', 'border-teal-500');
    document.querySelectorAll('.project-card').forEach(card => {
        if (cat === 'all' || card.classList.contains(cat)) {
            card.style.display = 'block';
            card.classList.add('aos-animate');
        } else {
            card.style.display = 'none';
        }
    });
}

// --- 4-WAY BUBBLE GENERATOR ---
function createBubbles() {
    const container = document.getElementById('four-way-bg');
    const icons = ['fa-bug', 'fa-bug', 'fa-server', 'fa-docker', 'fa-check-circle', 'fa-code-branch'];
    const animations = ['move-up', 'move-down', 'move-left', 'move-right'];
    const colors = ['p-bug', 'p-dev', 'p-qa'];

    for (let i = 0; i < 25; i++) {
        const bubble = document.createElement('i');
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const randomAnim = animations[Math.floor(Math.random() * animations.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        bubble.classList.add('fas', randomIcon, 'bubble-particle', randomAnim, randomColor);

        // Random Positioning
        if (randomAnim === 'move-up' || randomAnim === 'move-down') {
            bubble.style.left = Math.random() * 90 + 5 + '%';
        } else {
            bubble.style.top = Math.random() * 90 + 5 + '%';
        }

        bubble.style.animationDuration = (Math.random() * 3 + 3) + 's';
        bubble.style.animationDelay = (Math.random() * 5) + 's';

        container.appendChild(bubble);
    }
}

// Typing Effect
const textElement = document.getElementById('typed-text');

const phrases = [
    "DevOps Engineer",
    "DevOps Freelancer",
    "CI/CD Pipelines",
    "AWS & Docker"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeText() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    typeText();
});
