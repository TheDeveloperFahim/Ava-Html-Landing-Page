$(document).ready(function () {
  // Team carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 800,
    margin: 25,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Testimonial Carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 800,
    margin: 25,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Client Carousel
  $(".client-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 800,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  // Responsive Mobile Menu
  $(".menu-icon").on("click", function () {
    $(".main-menu").slideToggle("slow");
  });
});

// Sticky Navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Preloader
$(window).on("load", function () {
  $("#preloader").fadeOut("slow");
});
