Shery.makeMagnet(".page1 nav .nav2 h4");

function loaderPageAnimation() {
  function LoadingCounter() {
    let loadingNumber = document.querySelector(".loading-counter h4");
    let grow = 0;
    setInterval(() => {
      if (grow < 100) {
        loadingNumber.innerHTML = grow;
        grow++;
      } else {
        loadingNumber.innerHTML = grow;
      }
    }, 32);
  }

  let tl = gsap.timeline();
  tl.from(".loading-counter", {
    opacity: 0,
    duration: 0.5,
    x: -150,
  })
    .call(LoadingCounter)
    .from(
      ".text-line h1",
      {
        y: 600,
        stagger: 0.5,
        duration: 0.7,
        delay: -1,
      },
      "loading"
    )
    .to(
      ".loader h6",
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
      },
      "loading"
    )

    //nowtext
    .to("#now-text", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      delay: -0.2,
    })
    .to("#now-text", {
      fontFamily: "silk-light",
      webkitTextStroke: "0.5px #fff",
      fontWeight: 200,
      color: "transparent",
      opacity: 1,
      duration: 0.3,
      ease: Power1,
    })
    .to("#now-text", {
      opacity: 0,
      duration: 0.5,
      ease: Power1,
    })
    .set("#now-text", {
      webkitTextStroke: "1px #fff",
      fontWeight: 600,
      fontFamily: "plain-light",
    })
    .to("#now-text", {
      fontFamily: "plain-light",
      color: "white",
      opacity: 1,
      duration: 0.3,
      ease: Power1,
    })
    .to("#now-text", {
      opacity: 0,
      duration: 0.5,
      ease: Power1,
    })
    .set("#now-text", {
      webkitTextStroke: "1px #fff",
      fontWeight: 200,
      fontFamily: "silk-light",
    })
    .to("#now-text", {
      fontFamily: "silk-light",
      webkitTextStroke: "0.5px #fff",
      fontWeight: 200,
      color: "transparent",
      opacity: 1,
      duration: 0.3,
      ease: Power1,
    })

    //fading
    .to(
      ".text-line h1",
      {
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        delay: 0.8,
      },
      "fading"
    )
    .to(
      ".loader h6",
      {
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
      },
      "fading"
    )
    .to(
      ".loading-counter",
      {
        opacity: 0,
        duration: 1,
        delay: 0.8,
      },
      "fading"
    )

    //loader going up
    .to(".loader", {
      y: "-100%",
      ease: Power1,
      duration: 0.8,
      delay: -0.1,
    });
}

loaderPageAnimation();

function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotive()

// let tl = gsap.timeline()
// tl.from(".page1 .center-text .line h1", {
//   y: 300,
//   stagger: 0.2,
//   duration: 0.7,
//   // delay: 5.3,
//   ease: Power1,
// });

