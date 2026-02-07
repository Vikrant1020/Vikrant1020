// Project data
const projectsData = {
    project1: {
        title: "Carbon Emissions Analysis Platform",
        tag: "Azure",
        challenge: "Build a serverless platform for analyzing carbon emissions with automated data processing and ML-driven recommendations.",
        solution: "Designed end-to-end Azure infrastructure with Static Web Apps, Azure Functions, Container Apps, Databricks, and Data Factory for automated database updates.",
        impact: "Delivered secure CI/CD pipeline with SonarQube integration and automated test execution, enabling real-time emissions analysis.",
        technologies: ["Azure DevOps", "Azure Functions", "Databricks", "Data Factory", "Container Apps"]
    },
    project2: {
        title: "Truck Parking Booking Application",
        tag: "Azure",
        challenge: "Develop a serverless web and mobile platform for truck drivers to find and book parking spots.",
        solution: "Implemented automated CI/CD pipelines, deployed frontend on Azure Static Web Apps and backend on Container Apps, integrated Azure Communication Services for email/SMS.",
        impact: "Achieved seamless deployment automation with comprehensive scanning, building, and testing workflows.",
        technologies: ["Azure DevOps", "Static Web Apps", "Container Apps", "Communication Services"]
    },
    project3: {
        title: "Site Reliability Engineering Initiative",
        tag: "AWS",
        challenge: "Establish comprehensive monitoring and automation for AWS infrastructure with proactive incident management.",
        solution: "Implemented monitoring using New Relic and PagerDuty, automated Jenkins jobs, established daily reporting and escalation procedures.",
        impact: "Reduced MTTR by 50% through proactive monitoring and automated alerting systems.",
        technologies: ["AWS", "Jenkins", "New Relic", "PagerDuty"]
    },
    project4: {
        title: "Dating Platform Backend",
        tag: "Python/Django",
        challenge: "Build scalable Django API backend with third-party integrations for mobile dating application.",
        solution: "Integrated AWS Rekognition for photo filtering, Sendinblue for notifications, Google Play Store API for payments, leveraged S3 for media storage.",
        impact: "Reduced server load by 70% through S3 offloading and optimized API performance for mobile clients.",
        technologies: ["Django", "AWS Rekognition", "S3", "API Integration"]
    },
    project5: {
        title: "Dog Club Training Platform",
        tag: "AWS",
        challenge: "Create serverless infrastructure for dog training club with automated deployments.",
        solution: "Built CI/CD pipeline with AWS CodePipeline, deployed frontend on AWS Amplify and backend on ECS with automated scanning and testing.",
        impact: "Achieved zero-downtime deployments with complete automation from code commit to production.",
        technologies: ["AWS CodePipeline", "Amplify", "ECS", "CloudFormation"]
    }
};

// Project Modal functions
window.openProjectModal = function(projectId) {
    const modal = document.getElementById('projectModal');
    const detailsContainer = document.getElementById('projectDetails');
    const project = projectsData[projectId];
    
    if (!project) return;
    
    const techTags = project.technologies.map(tech => `<span>${tech}</span>`).join('');
    
    detailsContainer.innerHTML = `
        <div class="project-modal-header">
            <h2>${project.title}</h2>
            <span class="project-tag">${project.tag}</span>
        </div>
        <div class="project-modal-body">
            <div class="project-section">
                <h4>Challenge</h4>
                <p>${project.challenge}</p>
            </div>
            <div class="project-section">
                <h4>Solution</h4>
                <p>${project.solution}</p>
            </div>
            <div class="project-section">
                <h4>Impact</h4>
                <p>${project.impact}</p>
            </div>
        </div>
        <div class="project-modal-tech">
            ${techTags}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.closeProjectModal = function(event) {
    const modal = document.getElementById('projectModal');
    
    if (!event || event.target === modal || event.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Certificate Modal functions
window.openCertModal = function() {
    const modal = document.getElementById('certModal');
    const certImage = document.getElementById('certImage');
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    
    // Set the appropriate certificate image based on theme
    if (window.certImages) {
        certImage.src = currentTheme === 'dark' ? window.certImages.dark : window.certImages.light;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.closeCertModal = function(event) {
    const modal = document.getElementById('certModal');
    
    // Only close if clicking the backdrop or close button
    if (!event || event.target === modal || event.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modals on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeCertModal();
        window.closeProjectModal();
    }
});

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Navbar scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mouse parallax effect for hero orbs
const hero = document.querySelector('.hero');
const orbs = document.querySelectorAll('.gradient-orb');

if (hero && orbs.length > 0) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = hero;
        
        const xPos = (clientX / offsetWidth - 0.5) * 2;
        const yPos = (clientY / offsetHeight - 0.5) * 2;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 10;
            const x = xPos * speed;
            const y = yPos * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    hero.addEventListener('mouseleave', () => {
        orbs.forEach(orb => {
            orb.style.transform = 'translate(0, 0)';
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const navHeight = nav.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.section-header, .about-content, .skill-category, .timeline-item, .project-card, .cert-card, .plan-card, .education-item, .contact-content'
);

animateElements.forEach(el => {
    observer.observe(el);
});

// Add stagger delay to grid items
document.querySelectorAll('.skills-grid .skill-category').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.projects-grid .project-card').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

// Tech icons hover effect - add ripple
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Active section indicator
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
                link.classList.add('active');
            });
        } else {
            document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
                link.classList.remove('active');
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Enhanced email copy functionality with visual feedback
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        
        if (navigator.clipboard) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                // Create and show tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Email copied!';
                tooltip.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(102, 126, 234, 0.95);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                `;
                document.body.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => tooltip.remove(), 300);
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        }
    });
});

// Performance optimization: Debounce scroll events
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

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavigation, 100);
window.removeEventListener('scroll', highlightNavigation);
window.addEventListener('scroll', debouncedHighlight);

// Preload critical images
function preloadImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

// Analytics helper
function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const label = btn.textContent.trim();
        trackEvent('Button', 'Click', label);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .tech-icon {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
        }
    }
`;
document.head.appendChild(style);
