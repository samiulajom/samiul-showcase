$(document).ready(function () {
  // Initialize isotope filter functionality
  istopeFiterFun(".portfolio_filter ul", "li", ".portfolio-list ul", "li"); // Isotope
  // Initialize ripples effect for the specified element
  ripplesFun(".banner .image-container"); // Ripples effect
});
/*======================================================== */
/* isotope function start
/*======================================================== */

function istopeFiterFun(btnParent, btn, itemParent, item) {
  let isotopeInitialized = false; // Flag to track if Isotope is initialized
  let $grid;

  // Event listener for button clicks to filter items
  $(btnParent).on("click", btn, function () {
    const filterValue = $(this).attr("data-filter");

    // If the "*" filter is clicked, reset the isotope filter and destroy the current grid
    if (filterValue === "*") {
      if (isotopeInitialized) {
        $grid.isotope("destroy"); // Destroy Isotope instance
        isotopeInitialized = false; // Reset the initialized flag
        $(".grid").removeAttr("style"); // Optionally reset styles
      }
    } else {
      // If Isotope is not initialized, initialize it
      if (!isotopeInitialized) {
        $grid = $(itemParent).isotope({
          itemSelector: item, // The item elements to filter
          layoutMode: "masonry", // The layout mode of Isotope
        });
        isotopeInitialized = true; // Set initialized flag to true
      }
      // Apply the filter to the grid
      $grid.isotope({ filter: filterValue });
    }
  });
}
// isotope function end
/*======================================================== */
//! ripples effect function start
/*======================================================== */
function ripplesFun(arg) {
  $(arg).ripples({
    resolution: 500, // Set resolution for ripples effect
    dropRadius: 20, // Size of the ripple drop
    perturbance: 0.04, // Intensity of the ripple effect
    zIndex: 10,
  });
}
// ripples effect function end
/*======================================================== */
//! Setting function start
/*======================================================== */
const navItems = document.querySelectorAll("nav ul li"); // Select nav items
const mobileNavItems = document.querySelectorAll(".mobile-nav-menu ul li"); // Select nav items
const settingPanel = document.querySelector(".setting-pannel"); // Select the settings panel
const setting = document.querySelector(".setting"); // Select the setting button
const socialBtn = document.querySelector(".setting-pannel .social-icon button"); // Select the social button
const colorBtn = document.querySelector(".setting-pannel .color-panel button"); // Select the social button
const colorOptions = document.querySelector(
  ".setting-pannel .color-panel .color-options"
); // Select the social button
const socialMedia = document.querySelector(
  ".setting-pannel .social-icon .social-media"
); // Select the social media container
const themePannel = document.querySelector(".theme-pannel"); // Select the theme panel
const themeModeItems = document.querySelectorAll(".theme-mode li"); // Select theme mode list items
const portfoliofilterItems = document.querySelectorAll(
  ".portfolio_filter ul li"
); // Select portfolio filter items
const darkMode = document.querySelector(".theme-mode .dark-mode"); // Select dark mode toggle
const lightMode = document.querySelector(".theme-mode .light-mode"); // Select light mode toggle
const body = document.querySelector("body"); // Select body element
function settingpannel() {
  // Toggle active class for the settings panel
  setting.addEventListener("click", () => {
    setting.classList.toggle("active");
    themePannel.classList.toggle("active");
    settingPanel.classList.toggle("active");
  });

  // Toggle active class for social button
  socialBtn.addEventListener("click", () => {
    socialMedia.classList.toggle("active");
    socialBtn.classList.toggle("active");
  });
  colorBtn.addEventListener("click", () => {
    colorBtn.classList.toggle("active");
    colorOptions.classList.toggle("active");
  });
  // Call the dark mode control function
  darkModeControlFun();

  // Add/remove active class from theme mode items
  activeClassAddRemove(themeModeItems);
}
// Setting function end
settingpannel();
/*======================================================== */
//! Dark mode control function start
/*======================================================== */
function darkModeControlFun() {
  // Event listener for light mode button
  lightMode.addEventListener("click", () => {
    body.classList.add("light"); // Add light class to body
    body.classList.remove("dark"); // Remove dark class
  });

  // Event listener for dark mode button
  darkMode.addEventListener("click", () => {
    body.classList.add("dark"); // Add dark class to body
    body.classList.remove("light"); // Remove light class
  });
}
// dark mode control function end
/*======================================================== */
//! Mobile nav active class function start
/*======================================================== */
function mobileNavActive() {
  const openBtn = document.querySelector(".open-btn");
  const classBtn = document.querySelector(".close-btn");
  const mobileNav = document.querySelector(".mobile-nav-menu");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-menu ul li");
  openBtn.addEventListener("click", () => {
    mobileNav.classList.add("active"); // Add active class to
    mobileNavShowAmimation();
  });
  classBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active"); // Add active class to
  });
}
mobileNavActive();
/*======================================================== */
//! Active class function start
/*======================================================== */
function activeClassAddRemove(arg) {
  arg.forEach((item) => {
    // Add click event listener to each item
    item.addEventListener("click", () => {
      // Remove 'active' class from all items
      arg.forEach((navItem) => navItem.classList.remove("active"));
      // Add 'active' class to the clicked item
      item.classList.add("active");
    });
  });
}
//! Active class function end
activeClassAddRemove(navItems);
activeClassAddRemove(mobileNavItems);
activeClassAddRemove(portfoliofilterItems);
/*======================================================== */
//! Audio control function start
/*======================================================== */
const audioItems = document.querySelectorAll("nav ul li"); // Select items that trigger hover audio
const settingItems = document.querySelectorAll(".setting-pannel ul li"); // Select setting items
const listItems = document.querySelectorAll(".sm-education .list ul li"); // Select list items
const portfolioFilterItems = document.querySelectorAll(
  ".portfolio_filter  ul li"
); // Select portfolio filter items
const linkItems = document.querySelectorAll("a"); // Select anchor links
const buttonItems = document.querySelectorAll("button"); // Select buttons
const audioButton = document.getElementById("audioButton"); // Select audio control button
const audio = document.getElementById("audio"); // Select the main audio element
let audioEnable = false; // Flag to track whether hover audio is enabled

function audioControl() {
  // Toggle play/pause for the main audio when the button is clicked
  audioButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play(); // Play the audio
      audioEnable = true; // Enable hover audio when main audio is playing
      audio.volume = 0.1; // Set volume for main audio (optional)

      // Change the button icon to show audio is off
      audioButton.innerHTML = `<svg class="off" width="30" height="30" viewBox="0 0 30 30" fill="var(--secondaryColor)" xmlns="http://www.w3.org/2000/svg" border="10">
        <circle opacity="1" cx="15" cy="15" r="14.5" stroke="var(--bordercolor)"></circle>
        <path d="M11.9091 9V21M9 13.3636V16.6364M15 11.9091V18.0909M18.0909 10.4545V19.5455M21 13.3636V16.6364" stroke="var(--white)" stroke-linecap="round"></path>
      </svg>`;
    } else {
      audio.pause(); // Pause the audio
      audioEnable = false; // Disable hover audio when main audio is paused

      // Change the button icon to show audio is on
      audioButton.innerHTML = `<svg class="off" width="30" height="30" viewBox="0 0 30 30" fill="var(--navcolor)" xmlns="http://www.w3.org/2000/svg" border="10">
        <circle opacity="0.4" cx="15" cy="15" r="14.5" stroke="var(--bordercolor)"></circle>
        <path d="M11.9091 14V15M9 14V15M15 14V15M18.0909 14.0002V15M21 14V15" stroke="var(--white)" stroke-linecap="round"></path>
      </svg>`;
    }
  });

  // Hover effect for audio
  audioHover(audioItems); // Apply hover effect to audio items
  audioHover(buttonItems); // Apply hover effect to buttons
  audioHover(linkItems); // Apply hover effect to links
  audioHover(listItems); // Apply hover effect to list items
  audioHover(portfolioFilterItems); // Apply hover effect to portfolio filter items
  audioHover(settingItems); // Apply hover effect to setting items
}
audioControl();
//! Audio control function end
/*======================================================== */
//! Audio hover function start
/*======================================================== */
function audioHover(items) {
  // Assign hover audio based on item index
  items.forEach((item, index) => {
    // Assign audio paths by even or ood items numebr
    item.dataset.audio =
      (index + 1) % 2 === 0 ? "./audio/hover2.mp3" : "./audio/hover1.mp3";
  });

  // Loop through all items to play hover audio
  items.forEach((item) => {
    const hoverAudio = new Audio(item.dataset.audio);

    // Play hover audio on mouse enter if main audio is enabled
    item.addEventListener("mouseenter", () => {
      if (audioEnable) {
        hoverAudio.play();
      }
    });

    // Pause hover audio and reset when mouse leaves
    item.addEventListener("mouseleave", () => {
      hoverAudio.pause();
      hoverAudio.currentTime = 0; // Reset hover audio to play again
    });
  });
}
//! Audio hover function end
/*========================================================*/
//! Sentence break function  start
/*========================================================*/
function breakSentence(selector, content) {
  // Define the sentence from the given content
  const sentence = `${content}`;
  // Split the sentence into an array of words based on spaces
  const words = sentence.split(" ");
  // Select the container where the words will be appended
  const container = document.querySelector(`${selector}`);
  // Iterate over each word in the array
  words.forEach((word) => {
    // Create a new span element for each word
    const span = document.createElement("span");
    // Add a class name to the span for styling purposes
    span.className = "word";
    // Set the text content of the span to the current word
    span.textContent = word;
    // Append the span (word) to the container
    container.appendChild(span);
    // Add a space after each word by appending a text node
    container.appendChild(document.createTextNode(" "));
  });
}
// Call the function with the given sentence
breakSentence(
  ".page-preloader .loader-content",
  "Bringing my skills to the spotlight..."
);
//! Sentence break function  end
/*========================================================*/
//! colorPalete break function  start
/*========================================================*/
function colorPalete() {
  // Get all the color option elements
  const colorOptions = document.querySelectorAll(".color-options");
  // Add click event listener to each color option
  colorOptions.forEach((option) => {
    option.addEventListener("change", (e) => {
      // Get the color value from the 'data-color' attribute
      const selectedColor = e.target.value;
      // Set the CSS custom property (--main-color) to the selected color
      document.documentElement.style.setProperty(
        "--secondaryColor",
        selectedColor
      );
    });
  });
}
colorPalete();
//! colorPalete break function  end

/*========================================================*/
//!lenis smooth scroll function  start
/*========================================================*/
// Lenis initialization
const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
  infinite: false,
});
function lenisSmoothScroll() {
  // Lenis রিকোয়েস্ট অ্যানিমেশন ফ্রেম লুপ
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // Smooth scrolling যুক্ত করা (anchor link)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // ডিফল্ট লিংক বিহেভিয়ার বন্ধ
      const target = document.querySelector(this.getAttribute("href")); // লিংকের target সেকশন
      // Lenis থেকে smooth scroll
      lenis.scrollTo(target, { offset: 0, duration: 1 });
    });
  });
}
// lenisSmoothScroll();
document.addEventListener("DOMContentLoaded", function () {
  lenisSmoothScroll(); // Lenis smooth scroll ফাংশন কল
});
//!lenis smooth scroll function  end
/*========================================================*/
//! swiper Slider  break function  start
/*========================================================*/
function swiperSlider() {
  var swiper = new Swiper(".sm-testimonial-cards", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, // Enables infinite loop
    autoHeight: true, // Adjusts height automatically
    // autoplay: {
    //   delay: 3000, // Delay in milliseconds between slides
    //   disableOnInteraction: false, // Autoplay won't stop on user interaction
    // },
    speed: 1000, // Speed of the slide transition in milliseconds
    effect: "slide", // Smooth sliding animation
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Makes pagination dots interactive
    },
    navigation: false, // No navigation arrows
    centeredSlides: false, // Set to true if you want slides centered
    breakpoints: {
      0: {
        slidesPerView: 1, // 1 slide for small devices
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2, // 2 slides for medium screens
        spaceBetween: 30,
      },
      1900: {
        slidesPerView: 3, // 3 slides for large screens
        spaceBetween: 30,
      },
    },
  });
}
swiperSlider();
//! swiper Slider  break function  end
