var autoType = document.querySelector(".banner .left h3 .auto-type");
TypedAnimation(autoType); // Function for typed text animation
cursorAnimation(); // Custom cursor animation
PageScrollParsentage(); // Scroll percentage display functionality
svgAnimation(); // Interactive SVG line animation
bgLineAnimation(); // Background line animations
/*========================================================*/
//! Typed animation function start
/*========================================================*/
function TypedAnimation(arg) {
  var typed = new Typed(arg, {
    strings: [
      "Web Designer",
      "Web Developer",
      "Frontend Developer",
      "UI/UX Designer",
      "Programmer",
      "Shopify Developer"
    ],
    typeSpeed: 80, // Typing speed in milliseconds
    backSpeed: 60, // Backspacing speed in milliseconds
    backDelay: 1000, // Delay before backspacing
    startDelay: 500, // Delay before starting animation
    loop: true, // Infinite loop for the animation
    loopCount: Infinity, // Unlimited repetitions
    showCursor: true, // Display blinking cursor
    cursorChar: "|", // Character for the cursor
    smartBackspace: true, // Optimize backspacing
  });
}
//* Typed animation function end
/*========================================================*/
//! Custom Cursor Animation function start
/*========================================================*/
function cursorAnimation() {
  window.addEventListener("mousemove", function (events) {
    gsap.to(".cursor-small", {
      x: events.x,
      y: events.y,
      ease: "power3.out", 
      duration: 0.3,
    });
    gsap.to(".cursor", {
      x: events.x - 10, 
      y: events.y - 10,
      ease: "power3.out", 
      duration: 0.7,
    });
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(".cursor", {
          // scale: 1.5,
          duration: 0.3, // Short duration for hover
          borderColor: "var(--secondaryColor)", // Highlight cursor
        });
        gsap.to(".cursor-small", {
          scale: 1.5,
          duration: 0.3,
          ease: "linear", // Faster transition
          borderColor: "var(--secondaryColor)",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(".cursor", {
          scale: 1,
          duration: 0.3,
          ease: "linear",
          borderColor: "var(--white)",
        });
        gsap.to(".cursor-small", {
          scale: 1,
          duration: 0.3,
          ease: "linear",
          borderColor: "var(--white)",
        });
      });
    });
    document.querySelectorAll(".sm-btn").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(".cursor", {
          scale: 1.5,
          duration: 0.3, // Short duration for hover
          borderColor: "var(--secondaryColor)", // Highlight cursor
        });
        gsap.to(".cursor-small", {
          scale: 1.5,
          duration: 0.3,
          ease: "linear", // Faster transition
          borderColor: "var(--secondaryColor)",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(".cursor", {
          scale: 1,
          duration: 0.3,
          ease: "linear",
          borderColor: "var(--white)",
        });
        gsap.to(".cursor-small", {
          scale: 1,
          duration: 0.3,
          ease: "linear",
          borderColor: "var(--white)",
        });
      });
    });
  });
  // Improvement: Add throttling to reduce mousemove event overhead
}
//* Custom Cursor Animation function start
/*========================================================*/
//! Page Scroll Percentage Animation function start
/*========================================================*/
function PageScrollParsentage() {
  const circle = document.querySelector(".circle");
  const percentageText = document.querySelector(".percentage");
  const arrow = document.querySelector(".circle-container .arrow");
  const outCircle = document.querySelector(".out-circle");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Current vertical scroll position
    const docHeight =
      document.documentElement.scrollHeight - // Total scrollable height
      document.documentElement.clientHeight; // Viewport height
    const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100); // Prevent exceeding 100%
    outCircle.style.transform = ` rotate( ${scrollPercent}deg)`;
    circle.style.background = `conic-gradient(#4caf50 ${scrollPercent}%, #ccc ${scrollPercent}%)`;
    percentageText.textContent = `${Math.round(scrollPercent)}%`; // Display rounded percentage
    if (scrollPercent > 95) {
      circle.style.background = "#cf142b";
      percentageText.style.display = "none";
      arrow.style.display = "flex"; // Indicate scrolling completion
    } else {
      circle.style.background = `conic-gradient(#4caf50 ${scrollPercent}%, #ccc ${scrollPercent}%)`;
      percentageText.style.display = "flex";
      arrow.style.display = "none";
    }
  });
  // Improvement: Add cross-browser support for `scrollY` and `documentElement.scrollHeight`
}
//* Page Scroll Percentage Animation function end
/*========================================================*/
//! SVG Line Animation function start
/*========================================================*/
function svgAnimation() {
  var initialPath = `M 10 100 Q 500 10 920 100`;
  var finalPath = `M 10 100 Q 500 10 920 100`;
  var container = document.querySelector(".svg-line-container");
  container.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 920 100`; // Dynamic SVG line path
    gsap.to(".svg-line-container svg path", {
      attr: { d: path },
      duration: 0.5, // Animation speed for smoother transition
    });
  });
  container.addEventListener("mouseleave", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 920 100`; // Reset to original path
    gsap.to(".svg-line-container svg path", {
      attr: { d: finalPath },
      duration: 1.5, // Easing for elastic reset
      ease: "elastic.out(1,0.2)",
    });
  });
}
//* SVG Line Animation function end
/*========================================================*/
//! BG Line Animation function start
/*========================================================*/
function bgLineAnimation() {
  gsap.to(
    [".line-parent .line-1 .line-box", ".line-parent .line-3 .line-box"],
    {
      top: "100%",
      duration: 10, 
      ease: "linear", 
      repeat: -1, // Infinite repetition
      delay: 5, 
    }
  );
  gsap.to(
    [".line-parent .line-2 .line-box", ".line-parent .line-4 .line-box"],
    {
      bottom: "100%",
      duration: 10, // Similar speed for symmetry
      ease: "linear",
      repeat: -1,
      delay: 5,
    }
  );
}
//! BG Line Animation function end
/*========================================================*/
//! desktop  nav  Animation function start
/*========================================================*/
function desktopNavAnimation() {
  const tl = gsap.timeline();
  tl.from(".desktop", {
    x: "-100%",
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    ease: "power2.out",
  });
  tl.from(".desktop .nav-logo", {
    x: "-100%",
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scale: 0,
  });
  tl.from(".desktop ul li", {
    x: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power3.out",
  });
  tl.from(".desktop .nav-bottom", {
    x: "-100%",
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scale: 0,
  });
}
// desktopNavAnimation();
//!desktop nav animation end
/*========================================================*/
//! mobile nav  Animation function start
/*========================================================*/
function mobileNavShowAmimation() {
  const tl = gsap.timeline();
  tl.from(".mobile-nav-menu", {
    x: 60,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });
  tl.from(
    ".mobile-nav-menu.active .mobile-menu-items li",
    {
      x: 60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power3.out",
    },
    "0.2"
  );
  tl.from(".mobile-nav-menu.active .nav-bottom", {
    x: 60,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });
}
//! mobile nav  Animation function end
/*========================================================*/
//! page pre loader Animation function start
/*========================================================*/
function pageLoaderAnimation() {
  let tl = gsap.timeline();
  // পেজ প্রি-লোডার অ্যানিমেশন
  tl.from(".page-preloader .preloader-svg", {
    y: 40,
    rotate: -360,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2,
    scale: 0,
    ease: "linear",
  });
  tl.from(".page-preloader .loader-content span", {
    x: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
  tl.to(".page-preloader .preloader-svg", {
    y: -20,
    rotate: 360,
    opacity: 0,
    duration: 0.8,
    scale: 0,
    ease: "linear",
  });
  tl.to(".page-preloader .loader-content span", {
    x: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.inOut",
  });
  tl.to(".page-preloader", {
    opacity: 0,
    duration: 0.5,
    ease: "power1.out",
  }); // Slightly overlap with the previous animation.
  tl.from(".main", {
    overflowX: "hidden",
  });
  tl.to(".page-preloader", {
    display: "none",
    duration: 0,
    delay: 0.1,
  });
  // ন্যাভিগেশন এবং অ্যাসাইডের প্যারালেল অ্যানিমেশন
  tl.from(".desktop", {
    x: "-100%",
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
  tl.from(
    "aside",
    {
      x: "100%",
      opacity: 0,
      duration: 0.8,
      ease: "linear",
    },
    "<" // একই সময়ে শুরু হবে
  );
  tl.from(".desktop .nav-logo", {
    x: "-100%",
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scale: 0,
  });
  tl.from(".desktop ul li", {
    x: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power3.out",
  });
  tl.from(".desktop .nav-bottom", {
    x: "-100%",
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scale: 0,
  });
}
pageLoaderAnimation();
//! page pre loader Animation function end
gsap.registerPlugin(ScrollTrigger);
/* ======================================================= */
//!aboute animation start
/* ======================================================= */
function abouteAnimation() {
  gsap.from(".about .biography .text", {
    x: "-150%",
    opacity: 0,
    duration: 0.5,
    ease: "linear",
    scrollTrigger: {
      trigger: ".about .biography",
      scroll: ".main",
      start: "top 80%",
      end: "top 30%",
      scrub: 2, //start abong end er maje scroll er upor depand kore animation apply hobe.scoll korte thakle animation show hote thakbe .na hole show hobe na
    },
  });
  gsap.from(".about .personal_details .list ul li", {
    x: "150%",
    opacity: 0.5,
    duration: 5,
    stagger: 0.2,
    ease: "linear",
    delay: (index) => index * 0.1, //delay each item slightly to create a sense of movement
    scrollTrigger: {
      trigger: ".about .personal_details",
      scroll: ".main",
      start: "top 60%",
      end: "top 20%",
      scrub: 2, //start abong end er maje scroll er upor depand kore animation apply hobe.scoll korte thakle animation show hote thakbe .na hole show hobe na
    },
  });
}
abouteAnimation();
//!aboute animation end
/* ======================================================= */
//!education animation start
/* ======================================================= */
function educationAnimation() {
  gsap.from(".sm-education .left .list ul .list_inner", {
    x: "-150%",
    opacity: 0.5,
    duration: 5,
    stagger: 1.5,
    ease: "linear",
    delay: (index) => index * 1, //delay each item slightly to create a sense of movement
    scrollTrigger: {
      trigger: ".sm-education .left",
      scroll: ".main",
      scrub: 0.5,
      start: "top 60%",
      end: "top 20%",
    },
  });
  gsap.from(".sm-education .right .list ul .list_inner", {
    x: "150%",
    opacity: 0.5,
    duration: 5,
    stagger: 1.5,
    ease: "linear",
    delay: (index) => index * 0.1, //delay each item slightly to create a sense of movement
    scrollTrigger: {
      trigger: ".sm-education .right",
      scroll: ".main",
      scrub: 0.5,
      start: "top 60%",
      end: "top 20%",
    },
  });
}
educationAnimation();
//!education animation end
/* ======================================================= */
//!skilll animation start
/* ======================================================= */
function skillAnimation() {
  gsap.from(".sm-skills .sm-progress", {
    y: -100,
    scale: 0,
    opacity: 0,
    duration: 5,
    ease: "linear",
    scrollTrigger: {
      trigger: ".sm-skills",
      scroll: ".main",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });
}
skillAnimation();
//!skilll animation end
/* ======================================================= */
//!features  animation start
/* ======================================================= */
function featuresAnimation() {
  gsap.from(".sm-features .left .list ul li", {
    x: "150%",
    opacity: 0,
    duration: 3,
    scale: 0,
    stagger: 0.2,
    ease: "linear",
    delay: (index) => index * 0.1,
    scrollTrigger: {
      trigger: ".sm-features .left .list",
      scroll: ".main",
      start: "top 60%",
      end: "top 20%",
      scrub: 0.5,
    },
  });
  gsap.from(".sm-features .right .list ul li", {
    x: "-150%",
    opacity: 0,
    scale: 0,
    duration: 3,
    stagger: 0.2,
    ease: "linear",
    delay: (index) => index * 0.1,
    scrollTrigger: {
      trigger: ".sm-features .right .list",
      scroll: ".main",
      start: "top 60%",
      end: "top 20%",
      scrub: 0.5,
    },
  });
}
featuresAnimation();
//!features animation end
const svgHeadline = document.querySelector(".svg-header-container h2");
const svgPara = document.querySelector(".svg-line-container p");
const contactPara = document.querySelector(".contact-top p");
contactPara.innerHTML = `I create designs that are practical, usable, and ready to ship.With a focus on both form and function, I bring your ideas to life in a meaningful way.`;
/* ======================================================= */
//!breakNameFun function start
/* ======================================================= */
function breakNameFun(selector, splitTarget) {
  // Get the element
  var username = selector;
  // Get the text content of the element
  var usernameText = username.textContent;
  // Split the text into an array of words
  var userValueArray = usernameText.split(splitTarget);
  // Initialize an empty string for the updated content
  var clutter = "";
  // Loop through the array of words
  userValueArray.forEach(function (el, index) {
    // Add the word wrapped in a span and a space if not the last element
    clutter += `<span>${el}</span>${
      index < userValueArray.length - 1 ? " " : ""
    }`;
  });
  // Update the element's HTML content
  username.innerHTML = clutter;
}
breakNameFun(svgHeadline, " ");
breakNameFun(svgPara, " ");
breakNameFun(contactPara, " ");
//!beakName  function end
/* ======================================================= */
//!svg  animation start
/* ======================================================= */
function svgAnimaion() {
  gsap.from(".svg-header-container h2 span", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".svg-header-container h2",
      scroll: ".main",
      start: "top 70%",
      end: "top 10%",
      scrub: 1,
    },
  });
  gsap.from(".svg-line-container p span", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.8,
    ease: "power3.out",
    color: "var(--secondaryColor)",
    scrollTrigger: {
      trigger: ".svg-line-container p",
      scroll: ".main",
      start: "top 70%",
      end: "top 10%",
      scrub: 1,
    },
  });
}
svgAnimaion();
//!svg animation end
/* ======================================================= */
//!smCounterAnimation function start
/* ======================================================= */
function smCounterAnimation() {
  const oddItems = document.querySelectorAll(
    ".sm-counter .list li:nth-child(odd)"
  );
  const evenItems = document.querySelectorAll(
    ".sm-counter .list li:nth-child(even)"
  );
  const tl5 = gsap.timeline();
  // Animate odd items
  tl5.from(oddItems, {
    opacity: 0,
    scale: 0,
    y: 100,
    rotate: "360deg",
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".sm-counter .list",
      scroll: ".main",
      start: "top 60%",
      end: "top 0%",
      scrub: 0.5,
    },
  });
  // Animate even items
  tl5.from(evenItems, {
    opacity: 0,
    scale: 0,
    y: -100,
    rotate: "-360deg",
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".sm-counter .list",
      scroll: ".main",
      start: "top 60%",
      end: "top 10%",
      scrub: 0.5,
    },
  });
}
smCounterAnimation();
//!smCounterAnimation function start

/* ======================================================= */
//!service animation start
/* ======================================================= */
function serviceAnimation() {
  const items = document.querySelectorAll(".services-list ul li");
  items.forEach((item, index) => {
    if (index % 2 === 0) {
      gsap.from(item, {
        opacity: 0,
        scale: 0,
        x: -250,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          scroll: ".main",
          start: "top 70%",
          end: "top 30%",
          scrub: 0.5,
        },
      });
    } else {
      gsap.from(item, {
        opacity: 0,
        scale: 0,
        x: 250,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          scroll: ".main",
          start: "top 70%",
          end: "top 30%",
          scrub: 0.5,
        },
      });
    }
  });
  // Animate odd items
}
serviceAnimation();
//!service animation end
/* ======================================================= */
//!portfolioAnimation function start
/* ======================================================= */
function portfolioAnimation() {
  gsap.from(".portfolio_filter ul li", {
    opacity: 0,
    y: 100,
    rotate: "45deg",
    duration: 1,
    scale: 0,
    ease: "linear",
    scrollTrigger: {
      trigger: ".portfolio_filter ul",
      scroll: ".main",
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
  });
}
portfolioAnimation();
//!portfolioAnimation function end
/* ======================================================= */
//!contactAnimation function start
/* ======================================================= */
function contactAnimation() {
  gsap.from(".contact-top p span", {
    y: 100,
    duration: 5,
    opacity: 0,
    delay: 0.5,
    scaleX: 0,
    skewX: "45deg",
    stagger: 0.8,
    color: "var(--secondaryColor)",
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-top p span",
      scroll: ".main",
      start: "top 70%",
      end: "top 30%",
      scrub: 2,
    },
  });
  gsap.from(".contact-top h2", {
    x: -700,
    duration: 5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-top h2",
      scroll: ".main",
      start: "top 70%",
      end: "top 0%",
      scrub: 2,
    },
  });
}
contactAnimation();
//!contactAnimation function end
