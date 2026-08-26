import gsap from "gsap";

export const preLoaderAnim = (onComplete) => {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.from(".text-line:nth-child(1) span", {
    y: 100,
    duration: 1,
    ease: "power3.out",
  })
    .from(".text-line:nth-child(2) span", {
      y: 100,
      duration: 1,
      ease: "power3.out",
    })
    .from(".text-line:nth-child(3) span", {
      y: 100,
      duration: 1,
      ease: "power3.out",
    })
    .to(".preloader", {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    })
    .set(".preloader", {
      display: "none",
    });
};
