document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".service, .main-section h5, .main-section h2, .main-section p");

    const inViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    const checkElementsInViewport = () => {
        elements.forEach((element) => {
            if (inViewport(element)) {
                element.classList.add("fade-in");
            }
        });
    };

    // Initial check
    checkElementsInViewport();

    // Check when scrolling
    window.addEventListener("scroll", checkElementsInViewport);
});
