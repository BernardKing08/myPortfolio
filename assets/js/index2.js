(function() {
"use strict";

/**
 * Header toggle functionality
 */
const headerToggleBtn = document.querySelector('.mobile-nav-toggle');

function headerToggle() {
    // Toggles the 'header-show' class on the #header element
    document.querySelector('#header').classList.toggle('header-show');
    
    // Toggles the Bootstrap Icons for menu/close state (bi-list / bi-x)
    const icon = headerToggleBtn.querySelector('i');
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x');
}

if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', headerToggle);
}

/**
 * Hide the fixed sidebar on mobile when a hash link is clicked
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
    // If the sidebar is currently open ('header-show' is present) on mobile
    if (window.innerWidth <= 1199 && document.querySelector('.header-show')) {
        headerToggle();
    }
    });
});

/**
 * Toggle navmenu dropdowns
 */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.closest('.dropdown');
    dropdown.classList.toggle('active');
    e.stopImmediatePropagation();
    });
});

/**
 * Update active nav link on scroll
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navmenu a');
    
    let current = '';
    
    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
    }
    });

    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
    }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

})();


/**
* Animate the skills items on reveal
*/
document.addEventListener('DOMContentLoaded', function() {
    let skillsAnimation = document.querySelectorAll('.skills-animation');

    skillsAnimation.forEach((item) => {
    new Waypoint({
        element: item,
        offset: '80%',
        handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
            // Sets the width based on the aria-valuenow attribute in the HTML
            el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
        }
    });
    });
});
