
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const fishImage = entry.target.data-fish;
            if (fishImage) {
                const fishElement = entry.target.querySelector('.fish');
                if (fishElement) {
                    fishElement.style.backgroundImage = `url(${fishImage})`;
                }
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
