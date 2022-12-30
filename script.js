//     ---------animation-----

gsap.registerPlugin,{ScrollTrigger}

  gsap.from("#nav",{
        duration:2,
        opacity: 0,
        y: -100,
  });

  gsap.from("#main .container img",{
          duration:2,
          opacity: 0,
          scale:0.5,
          delay:1
    });
    gsap.from("#main .page1 img",{
          scrollTrigger:'',
          duration:2,
          opacity: 0,
          scale:0.5,
    });
