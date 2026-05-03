let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
slides[0].classList.add('active');
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

const allButtons = document.querySelectorAll('#header-btn');
allButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const isNextButton = (index % 2 === 1);
        
        if (isNextButton) {
        
            currentSlide = (currentSlide + 1) % totalSlides;
        } else {
        
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        }
        
        showSlide(currentSlide);
    });
});