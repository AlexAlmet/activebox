$(function () {
  /************************* Fixed header**************************/

  const header = $("#header");
  const intro = $("#intro");
  const nav = $("#nav");

  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(introH, scrollPos);

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(introH, scrollPos);
  });

  function checkScroll(introH, scrollPos) {
    if (scrollPos >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*************************Smoth scroll **************************/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    nav.removeClass("show");
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;
    $("html, body").animate(
      {
        scrollTop: elementOffset - 60,
      },
      650
    );
  });

  /*************************NavToggle**************************/
  $("#navToggle").on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  /*************************Clients Slider**************************/

  $(".client_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    dots:true,
    arrows:false    
  });

});

