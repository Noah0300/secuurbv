// Secuur BV Custom Frontend Scripts
// This file handles frontend functionality without WordPress backend

// 1. Form Handler - Contact Forms (fallback en validation)
document.addEventListener('DOMContentLoaded', function() {
    initContactForms();
    fixVideoSlider();
    improveNavigation();
});

function initContactForms() {
    const forms = document.querySelectorAll('.wpcf7-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    });
}

function handleFormSubmit(form) {
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data['your-name'] || !data['your-email'] || !data['your-message']) {
        showFormError(form, 'Vul alle velden in alstublieft.');
        return;
    }
    
    // Validate email
    if (!isValidEmail(data['your-email'])) {
        showFormError(form, 'Voer een geldig e-mailadres in.');
        return;
    }
    
    // Show success message (in production: send to email service)
    console.log('Form data would be sent:', data);
    showFormSuccess(form, 'Bedankt! We nemen zo snel mogelijk contact op.');
    form.reset();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormError(form, message) {
    const response = form.querySelector('.wpcf7-response-output') || createResponseElement(form);
    response.className = 'wpcf7-response-output wpcf7-form-control-wrap wpcf7-not-valid-tip';
    response.textContent = message;
}

function showFormSuccess(form, message) {
    const response = form.querySelector('.wpcf7-response-output') || createResponseElement(form);
    response.className = 'wpcf7-response-output wpcf7-mail-sent-ok';
    response.textContent = message;
}

function createResponseElement(form) {
    const element = document.createElement('div');
    element.className = 'wpcf7-response-output';
    form.parentNode.insertBefore(element, form);
    return element;
}

// 2. Fix Video Slider (disable YouTube embed, use poster image)
function fixVideoSlider() {
    const videoContainer = document.querySelector('rs-bgvideo');
    if (videoContainer) {
        // Disable video autoplay/embedding
        videoContainer.style.display = 'none';
    }
    
    // Ensure slider images load correctly
    const sliderImages = document.querySelectorAll('.rev-slidebg');
    sliderImages.forEach(img => {
        if (img.dataset.lazyload) {
            const src = img.dataset.lazyload.replace(/^\/\//, 'https://');
            img.src = src;
            img.style.display = 'block';
        }
    });
}

// 3. Improve Navigation
function improveNavigation() {
    // Fix active menu item
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('#main-menu .menu-item a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentPath.includes(href.replace(/\/$/, ''))) {
            item.closest('.menu-item').classList.add('active', 'current-menu-item');
        }
    });
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.navbar-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            const menu = document.querySelector('#main-menu');
            menu.classList.toggle('in');
        });
    }
}

// 4. Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 5. Accessibility improvements
document.querySelectorAll('img').forEach(img => {
    if (!img.alt) {
        img.alt = img.title || 'Secuur BV afbeelding';
    }
});

console.log('Secuur BV custom scripts loaded successfully');
