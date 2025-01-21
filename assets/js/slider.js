window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(observeFunc, {
    rootMargin: "400px 0px 400px 0px",
  });
  function observeFunc(entries) {
    if (entries[0].isIntersecting) {
      run();
      observer.disconnect();
    }
  }

  observer.observe(document.querySelector("section.advantages"));

  function run() {
    // Load JS
    const jQuery = document.createElement("script");
    jQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jQuery.type = "text/javascript";
    jQuery.onload = loadJQueryMigrate;

    document.body.appendChild(jQuery);

    function loadJQueryMigrate() {
      const jQueryMigrate = document.createElement("script");
      jQueryMigrate.src = "https://code.jquery.com/jquery-migrate-3.3.2.min.js";
      jQueryMigrate.type = "text/javascript";
      jQueryMigrate.onload = loadSliderScript;

      document.body.appendChild(jQueryMigrate);
    }
    function loadSliderScript() {
      const sliderScripts = document.createElement("script");
      sliderScripts.src =
        "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
      sliderScripts.type = "text/javascript";
      sliderScripts.onload = initializeSlider;

      document.body.appendChild(sliderScripts);
    }

    // Load CSS
    const sliderStyles = document.createElement("link");
    sliderStyles.rel = "stylesheet";
    sliderStyles.type = "text/css";
    sliderStyles.href =
      "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css";

    document.head.appendChild(sliderStyles);
  }
});

function initializeSlider() {
  $(".advantages__slider").slick({
    dots: true,
    arrows: true,
    speed: 300,
    infinite: false,
    slidesToShow: 1,

    appendDots: ".advantages__slider-dots",

    appendArrows: ".advantages__slider-arrows",
    prevArrow: '<button type="button" class="btn slick-prev"><img src="assets/images/arrow-right.svg" alt="arrow icon" width="24" height="24" /></button>',
    nextArrow: '<button type="button" class="btn slick-next"><img src="assets/images/arrow-right.svg" alt="arrow icon" width="24" height="24" /></button>',
  });
}
