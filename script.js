function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotive();

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

let tl = gsap.timeline();
tl.from(".page1 #lastLine", {
  y: 300,
  stagger: 0.2,
  duration: 0.7,
  delay: 5.3,
  ease: Power1,
});

function sheryAnimation() {
  Shery.imageEffect(".image-holder", {
    style: 5,
    gooey: true,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: -0.62, range: [-1, 1] },
      zindex: { value: "9996999", range: [-9999999, 9999999] },
      aspect: { value: 0.7666558159722222 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.83, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1.06, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 2.82, range: [0, 10] },
      metaball: { value: 0.47, range: [0, 2] },
      discard_threshold: { value: 0.64, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.38, range: [0, 2] },
      noise_scale: { value: 11.45, range: [0, 100] },
    },
  });
}

sheryAnimation();

function cursorAnimation() {
  //image flag
  document.querySelector(".page1").addEventListener("mousemove", (dets) => {
    gsap.to(".img-flag", {
      x: dets.x,
      y: dets.y,
    });
  });

  function flagOver() {
    document.querySelector(".web").addEventListener("mouseenter", function () {
      gsap.to(".img-flag", {
        opacity: 1,
      });
    });
    document.querySelector(".web").addEventListener("mouseleave", function () {
      gsap.to(".img-flag", {
        opacity: 0,
      });
    });
    document.querySelector(".grpc").addEventListener("mouseenter", function () {
      gsap.to(".img-flag", {
        opacity: 1,
      });
    });
    document.querySelector(".grpc").addEventListener("mouseleave", function () {
      gsap.to(".img-flag", {
        opacity: 0,
      });
    });
  }
  flagOver();

  function videoContainerHover() {
    let vContainer = document.querySelector(".video-container");
    let vCursor = document.querySelector(".play-btn");

    vContainer.addEventListener("mouseenter", (dets) => {
      gsap.to(".play-btn", {
        left: dets.x - 475,
        y: dets.y - 110,
      });
      vContainer.addEventListener("mousemove", (dets) => {
        gsap.to(".c-crsr", {
          opacity: 0,
        });
        gsap.to(".play-btn", {
          left: dets.x - 475,
          y: dets.y - 110,
        });
      });
    });

    vCursor.addEventListener("mousemove", (dets) => {
      gsap.to(".c-crsr", {
        opacity: 0,
      });
      gsap.to(".play-btn", {
        left: dets.x - 475,
        y: dets.y - 110,
      });
    });

    vContainer.addEventListener("mouseleave", () => {
      gsap.to(".c-crsr", {
        opacity: 1,
      });
      gsap.to(".play-btn", {
        left: "65%",
        top: "-15%",
      });
    });

    let vflag = 0;
    let video = document.querySelector(".video-container video");
    vCursor.addEventListener("click", () => {
      vContainer.addEventListener("click", () => {
        if (vflag == 0) {
          video.play();
          video.style.opacity = 1;
          document.querySelector(
            ".play-btn"
          ).innerHTML = `<i class="ri-pause-mini-fill"></i>`;
          gsap.to(".play-btn", {
            scale: 0.5,
          });
          vflag = 1;
        } else {
          video.pause();
          video.style.opacity = 0;
          document.querySelector(
            ".play-btn"
          ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
          gsap.to(".play-btn", {
            scale: 1,
          });
          vflag = 0;
        }
      });
    });
    vContainer.addEventListener("click", () => {
      if (vflag == 0) {
        video.play();
        video.style.opacity = 1;
        document.querySelector(
          ".play-btn"
        ).innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        gsap.to(".play-btn", {
          scale: 0.5,
        });
        vflag = 1;
      } else {
        video.pause();
        video.style.opacity = 0;
        document.querySelector(
          ".play-btn"
        ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
        gsap.to(".play-btn", {
          scale: 1,
        });
        vflag = 0;
      }
    });
  }
  videoContainerHover();

  //navbar magnet
  Shery.makeMagnet(".page1 nav .nav-left svg");
  Shery.makeMagnet(".page1 nav .nav2 h4");
}

cursorAnimation();

function customCursor(opts = {}) {
  let globalCursor = document.createElement("div");
  let behindCursor = document.createElement("div");

  globalCursor.classList.add("c-crsr");
  behindCursor.classList.add("c-crsr");
  behindCursor.id = "behindmouse";

  document.addEventListener("mousemove", function (e) {
    gsap.to(".c-crsr", {
      top: e.clientY,
      left: e.clientX,
      duration: opts.duration || 0.2,
      ease: opts.ease || "expo.out",
    });
  });

  document.addEventListener("mouseenter", function () {
    gsap.to(".c-crsr", { opacity: 1 });
  });

  document.addEventListener("mouseleave", function () {
    gsap.to(".c-crsr", {
      opacity: 0,
      duration: opts.duration || 0.3,
      ease: opts.ease || "expo.out",
    });
  });

  document.body.appendChild(behindCursor);
  document.body.appendChild(globalCursor);
}

// activate cursor
customCursor({ duration: 0.25 });