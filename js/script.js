// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Toggle between bars and X icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a nav link (for mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Add certifications link to navigation
    const navList = document.querySelector('.nav-menu ul');
    if (navList) {
        const projectsItem = Array.from(navList.children).find(item => 
            item.querySelector('a').getAttribute('href') === '#projects'
        );
        
        if (projectsItem) {
            const certItem = document.createElement('li');
            const certLink = document.createElement('a');
            certLink.setAttribute('href', '#certifications');
            certLink.textContent = 'Certifications';
            certItem.appendChild(certLink);
            navList.insertBefore(certItem, projectsItem);
        }
    }
    
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add active class to navigation items when scrolling through sections
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').indexOf(current) !== -1) {
                item.classList.add('active');
            }
        });
    });
    
    // Form submission handling (prevent default for now)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally handle the form submission with AJAX
            // For now, just show an alert
            alert('Thanks for your message! This is just a demo, so the form is not actually submitted.');
            contactForm.reset();
        });
    }
    
    // Add animation when scrolling into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .certification-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check and add scroll event listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});