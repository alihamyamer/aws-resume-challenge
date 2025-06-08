document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    document.body.appendChild(overlay);
    
    const images = document.querySelectorAll('.image-container img');
    
    images.forEach(image => {
        image.addEventListener('click', function() {
            this.classList.toggle('expanded');
            overlay.classList.toggle('active');
        });
    });
    
    // Close expanded image when clicking overlay
    overlay.addEventListener('click', function() {
        const expandedImage = document.querySelector('.image-container img.expanded');
        if (expandedImage) {
            expandedImage.classList.remove('expanded');
            overlay.classList.remove('active');
        }
    });
});