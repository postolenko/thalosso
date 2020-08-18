function getHeaderParams() {
  if($(document).scrollTop() > 1) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {

    getHeaderParams();

});

$(document).scroll(function() {

    getHeaderParams();

});

$(document).ready(function() {

    getHeaderParams();

    if( $(".slider").length > 0 ) {


        $(".slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
          var slideDescript = $(".slider .slick-slide:eq("+nextSlide+") .slide_descript").html();
          $(".slider_descript").html(slideDescript);
        });

        $(".slider").on('init', function(){
          var slideDescript = $(".slider .slick-current .slide_descript").html();
          $(".slider_descript").html(slideDescript);
        });

        $(".slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.svg"></button>',
            // fade: true,
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
        });
    }

});