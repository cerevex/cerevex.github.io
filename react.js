document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.tech-nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // User Panel Toggle
    const userIcon = document.getElementById('userIcon');
    const userPanel = document.getElementById('userPanel');
    
    userIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        userPanel.classList.toggle('active');
    });
    
    document.addEventListener('click', function() {
        userPanel.classList.remove('active');
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.tech-nav-links ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Smooth Scrolling for Anchor Links
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
    
    // Scroll Animation
    const animateElements = document.querySelectorAll('[class*="animate-"]');
    
    function checkAnimation() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                const delay = element.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }, delay * 1000);
            }
        });
    }
    
    // Initial check
    checkAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', checkAnimation);
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Login/Logout Simulation
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    function updateAuthUI() {
        if (isLoggedIn) {
            document.getElementById('loginLink').style.display = 'none';
            document.getElementById('profileLink').style.display = 'block';
            document.getElementById('paymentHistoryLink').style.display = 'block';
            document.getElementById('coursesLink').style.display = 'block';
            document.getElementById('logoutLink').style.display = 'block';
        } else {
            document.getElementById('loginLink').style.display = 'block';
            document.getElementById('profileLink').style.display = 'none';
            document.getElementById('paymentHistoryLink').style.display = 'none';
            document.getElementById('coursesLink').style.display = 'none';
            document.getElementById('logoutLink').style.display = 'none';
        }
    }
    
    // Initialize
    updateAuthUI();
    
    // Simulate login
    document.getElementById('loginLink').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        updateAuthUI();
        window.location.href = '#profile';
    });
    
    // Simulate logout
    document.getElementById('logoutLink').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        updateAuthUI();
        window.location.href = '#home';
    });
    
    // Page routing for SPA behavior
    function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('main > section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show requested page
        const page = document.getElementById(pageId);
        if (page) {
            page.style.display = 'block';
            window.scrollTo(0, 0);
        } else {
            document.getElementById('home').style.display = 'block';
        }
    }
    
    // Handle hash changes
    window.addEventListener('hashchange', function() {
        const pageId = window.location.hash.substring(1);
        showPage(pageId);
    });
    
    // Initialize page based on URL hash
    const initialPage = window.location.hash.substring(1) || 'home';
    showPage(initialPage);
    
    // Initialize Particle.js if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6e48aa" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#6e48aa", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});
