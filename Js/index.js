gsap.registerPlugin(ScrollTrigger);

gsap.from('.Favorties', {
    y: 400,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger:".flex",
        start: "top 80%",
    }
});
gsap.from('.Logo', {
    duration:5,
    ease: "elastic.out(1,0.3)",
    y: -250,
        scrollTrigger: {
        trigger:'.logo',
        start: "top 80%",
    }
    });