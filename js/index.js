// navbar
$(".navbar .dropdown").hover(
  function () {
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .delay(50)
      .slideDown();
  },
  function () {
    $(this).find(".dropdown-menu").first().stop(true, true).delay(50).slideUp();
  }
);
// navbar-end

$(".products-slider").slick({
  dots: true,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 1200,
  infinite: true,
  arrows: true,
  prevArrow:
    '<div class="slick-arrow slick-prev fa-solid fa-chevron-left"></div>',
  nextArrow:
    '<div class="slick-arrow slick-next fa-solid fa-chevron-right"></div>',
  speed: 350,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$('.mob-dash-btn').click(function(){
      
  $('.mob-dash').toggleClass('mob-dash-active');
});
$(window).scroll(function () {


 
        if ($(this).scrollTop() > 50) {
           
            $('.c-header').addClass('fixy');
           

        } else {
           
            $('.c-header').removeClass('fixy');
            
        }
    });

    // top-scroll
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
     
				$('#back-to-top').fadeIn().css('display','flex');
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
// top-scroll-end

// ---elevate-zoom--    
    var colors = [];

    var zoomOptions = {
      zoomType: "inner",
      cursor: "crosshair",
      scrollZoom:true
    };
    
    $(document).ready(function() {
      $(".regular").slick({
        arrows:false,
        asNavFor: ".thumbs",
        prevArrow:
          '<div class="slick-arrow slick-prev fa-solid fa-chevron-left"></div>',
        nextArrow:
          '<div class="slick-arrow slick-next fa-solid fa-chevron-right"></div>',
          responsive: [
          
          {
            breakpoint: 786,
            settings: {
              
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
      $(".thumbs").slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        asNavFor: ".regular",
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 786,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 320,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
        
      });
      $(".regular .slick-current img").elevateZoom(zoomOptions);
      $(".regular").on("beforeChange", function(
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        $.removeData(currentSlide, "elevateZoom");
        $(".zoomContainer").remove();
      });
      $(".regular").on("afterChange", function() {
        $(".regular .slick-current img").elevateZoom(zoomOptions);
      });
    });
    
    function filter(key) {
      $(".regular, .thumbs").slick("slickUnfilter");
    
      if (typeof key === "string") {
        $(".regular, .thumbs").slick("slickFilter", `div[data-color="${key}"]`);
      }
      $(".regular, .thumbs").slick("refresh");
    }
// ---elevate-zoom-end--    


// price-range
var prange = document.querySelector('.prange');

noUiSlider.create(prange, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
var  nonLinearStepSliderValueElement= document.querySelector(".slider-non-linear-step-value");
prange.noUiSlider.on("update", function (values) {
        nonLinearStepSliderValueElement.innerHTML = "&#8377;" + values.join(" - &#8377;");
      });
      // price-range-end

      $(".c-close").click(function(){
        $('.off-close').offcanvas('hide');
    });

    // cart-items
   

		
      //  cart-items-end

      $('.tab-link').on('click', function(event) {
       


        event.preventDefault();
      
       
        var target = $('[data-bs-toggle="tab"][href="' + this.hash + '"]');
        
      
        target.trigger('click');
       
        target[0].scrollIntoView(true);
      });
      
      



  