// Navigation and interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.querySelector('.contact-form');
    const heroDescription = document.querySelector('.hero-description');

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Initialize active nav link
    updateActiveNavLink();

    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links on same page and cross-page
    function handleSmoothScroll(e, href) {
        if (href.includes('#')) {
            e.preventDefault();
            const [page, hash] = href.split('#');
            
            if (page && page !== window.location.pathname.split('/').pop()) {
                // Cross-page navigation
                window.location.href = href;
                // Scroll will happen after page load
        setTimeout(() => {
                    const targetSection = document.querySelector('#' + hash);
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 70;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            } else {
                // Same page navigation
                const targetSection = document.querySelector(href.startsWith('#') ? href : '#' + hash);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            handleSmoothScroll(e, href);
        });
    });

    // Handle back-link smooth scroll
    const backLinks = document.querySelectorAll('.back-link');
    backLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            handleSmoothScroll(e, href);
        });
    });

    // Add scrolled class to navbar
    function updateNavbarState() {
        // Show hero description as soon as scrolling starts
        if (heroDescription) {
            if (window.scrollY > 10) {
                heroDescription.classList.add('visible');
            } else {
                heroDescription.classList.remove('visible');
            }
        }
    }

    // Rotating text feature (only on homepage)
    // Updated order: UX/UI Designer, Student-athlete, Longhorn
    function initRotatingText() {
        const rotatingTextElement = document.querySelector('.rotating-text');
        if (!rotatingTextElement) return;

        const texts = ['UX/UI Designer', 'Student-athlete', 'Longhorn'];
        let currentIndex = 0;
        
        // Set initial text
        rotatingTextElement.textContent = texts[currentIndex];

        function rotateText() {
            rotatingTextElement.classList.add('fade-out');
        setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                rotatingTextElement.textContent = texts[currentIndex];
                rotatingTextElement.classList.remove('fade-out');
            }, 800); // Match CSS transition duration (0.8s)
        }

        // First rotation after 2 seconds, then regular 3-second intervals
        setTimeout(() => {
            rotateText();
            setInterval(rotateText, 3000);
        }, 2000);
    }

    initRotatingText();

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
        }
    }
    });

    // Scroll handler for navbar state
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const handleScroll = debounce(function() {
        updateActiveNavLink();
        updateNavbarState();
    }, 10);

    window.addEventListener('scroll', handleScroll);
    updateActiveNavLink();
    updateNavbarState();

    // Handle cross-page navigation with hash
    if (window.location.hash) {
        setTimeout(() => {
            const targetSection = document.querySelector(window.location.hash);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});
