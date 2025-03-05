document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { 
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev" 
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Animation for Intro Text
    gsap.from(".intro-text", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power3.out",
    });
});
