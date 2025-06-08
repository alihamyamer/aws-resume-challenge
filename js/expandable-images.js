document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');
    
    images.forEach(image => {
        image.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});