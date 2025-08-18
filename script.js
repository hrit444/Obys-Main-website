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

loaderPageAnimation()