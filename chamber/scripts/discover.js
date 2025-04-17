// Track last visit using localStorage
document.addEventListener('DOMContentLoaded', function() {
    // Set current visit date
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');
    const messageElement = document.getElementById('visit-message');
    
    // Calculate days between visits and display appropriate message
    if (lastVisit) {
        const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysBetween === 0) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            messageElement.textContent = "You last visited 1 day ago.";
        } else {
            messageElement.textContent = `You last visited ${daysBetween} days ago.`;
        }
    } else {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    }
    
    // Store current visit date
    localStorage.setItem('lastVisit', currentVisit);
    
    // Lazy loading for images with intersection observer
    const lazyImages = document.querySelectorAll('.card img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Check if image has data-src attribute
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    // Add loaded class when image is loaded
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '200px' // Load images slightly before they're in view
        });
        
        lazyImages.forEach(img => {
            // If browser doesn't support loading="lazy", use IntersectionObserver
            if ('loading' in HTMLImageElement.prototype) {
                if (img.complete) {
                    img.classList.add('loaded');
                } else {
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                }
            } else {
                // Store original src in data-src and remove src
                img.dataset.src = img.src;
                img.src = '';
                imageObserver.observe(img);
            }
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
            }
        });
    }
    
    // Add click handlers for "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            const title = card.querySelector('h2').textContent;
            const description = card.querySelector('p').textContent;
            const address = card.querySelector('address').textContent;
            
            // Create modal content
            const modalContent = `
                <h2>${title}</h2>
                <p><strong>Address:</strong> ${address}</p>
                <p>${description}</p>
                <p>For more information, please contact the Lagos Chamber of Commerce.</p>
            `;
            
            // Create and show modal
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    ${modalContent}
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal functionality
            const closeButton = modal.querySelector('.close');
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.removeChild(modal);
            });
            
            // Close when clicking outside modal content
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.removeChild(modal);
                }
            });
            
            modal.style.display = 'block';
        });
    });
    
    // Add hover effects for non-touch devices
    function hasTouch() {
        return 'ontouchstart' in document.documentElement || 
               navigator.maxTouchPoints > 0 || 
               navigator.msMaxTouchPoints > 0;
    }
    
    if (!hasTouch()) {
        document.body.classList.add('no-touch');
    }
});