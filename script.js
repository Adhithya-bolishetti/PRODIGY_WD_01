// Change navbar style on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
        navbar.style.transition = "background 0.3s";
    } else {
        navbar.style.background = "hwb(200 41% 12%)";
    }
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add a class to change styles
      } else {
        navbar.classList.remove('scrolled'); // Remove the class when at the top
      }
});
