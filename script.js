document.addEventListener("DOMContentLoaded", () => {
    gsap.from("header h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from("header p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
    gsap.from("section", { duration: 1, opacity: 0, stagger: 0.3 });
});
