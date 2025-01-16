jQuery(document).ready(function($) {

  "use strict";

  // Slider
  if($('.flexslider').length > 0) {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  }

  var nextItem = '',
      ValidNextItem = '',
      prevItem = '',
      ValidPrevItem = '';

  // Get previous and next item's background image
  prevItem = $('.slider .flexslider .slides li').prev().css('background-image');
  if (prevItem) {
    ValidPrevItem = prevItem.substr(5, prevItem.length - 11).concat('-100x50.jpg');
  } else {
    ValidPrevItem = ''; // Default value if no background image
  }

  nextItem = $('.slider .flexslider .slides li').next().css('background-image');
  if (nextItem) {
    ValidNextItem = nextItem.substr(5, nextItem.length - 11).concat('-100x50.jpg');
  } else {
    ValidNextItem = ''; // Default value if no background image
  }

  // Change background image on hover for next and prev buttons
  $('.slider .flexslider .flex-next').hover(function () {
    $(this).css('background-image', 'url(' + ValidNextItem + ')');
  }, function () {
    $(this).css('background-image', 'url()');
  });

  $('.slider .flexslider .flex-prev').hover(function () {
    $(this).css('background-image', 'url(' + ValidPrevItem + ')');
  }, function () {
    $(this).css('background-image', 'url()');
  });

  if($(window).width() > '900') {
    jQuery('.animated').each(function(i, obj) {
        var anim_class = jQuery(this.element).data('animated');
        if(!jQuery(this).hasClass(anim_class)){
            jQuery('.animated').css('opacity', 0);
        }
    });
  }

  // Animate elements when they come into view
  $('.animated').waypoint(function() {
    var that = $(this.element).length > 0 ? $(this.element) : $(this);
    that.css('opacity', 1);
    that.addClass(that.data('animated'));
  },
  { offset: 'bottom-in-view' });

  /* Carousel */
  $(".carousel_client").owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop:true,
    items:3,
    responsiveClass:true,
    responsive:{
      0:{
        items:2,
        nav:true
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:6,
        nav:true,
        loop:false
      },
      1200:{
        items:6,
        nav:true,
        loop:false
      }
    }
  });

  $(".owl-testimonail").owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    autoPlay: true,
    stopOnHover: true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      800:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true,
        loop:false
      }
    }
  });

  /* Parallax */
  if (!isMobile.apple.phone && !isMobile.android.phone && !isMobile.seven_inch) {
    $('.wd-form-image2').parallax("10%", -0.3);
    $('.wd-section-clients').parallax("30%", -0.3);
  }

  /* Portfolio Masonry - Isotope */
  var $container = $('#gallery-items');
  $container.isotope({
    filter: '*',
    itemSelector: '.element',
    animationEngine: 'best-available',
  });

  jQuery('#filters a').on('click',function (e) {
    $('.gallery-filter .current').removeClass('current');
    $(this).addClass('current');
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
  });

  /* Map */
  function initializeMap() {
    var styles = [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles, {
      name: "Styled Map"
    });

    var mapOptions = {
      scaleControl: true,
      scrollwheel: false,
      center: new google.maps.LatLng(latitude, longitude),
      zoom: flooring_zoom,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    var image = window.location.origin + window.location.pathname + 'images/marker_icon.png';
    var marker = new google.maps.Marker({
      map: map,
      icon: image,
      position: map.getCenter()
    });

    var infowindow = new google.maps.InfoWindow();
    if( companyname != "") {
      companyname = "<h4>" + companyname + "</h4>";
    }
    infowindow.setContent("<div class='map-description'>" + companyname + " " + description + "</div>");
    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  }

  if ($('#map-canvas').length > 0) {
    var latitude = $('#map-canvas').data('latitude'),
        longitude = $('#map-canvas').data('longitude'),
        flooring_zoom = $('#map-canvas').data('zoom'),
        companyname = $('#map-canvas').data('companyname'),
        imagepath = $('#map-canvas').data('imagepath'),
        description = $('#map-canvas').data('decription');

    if (imagepath == "") {
      var image_markup = '';
    } else {
      var image_markup = '<div class="map-img"><img src="' + imagepath + '" alt="" width="320px"></div>';
    }

    google.maps.event.addDomListener(window, 'load', initializeMap);
  }

  /* Slider */
  $(window).load(function() {
    $('.fullscreen .swiper-slide').height(window.innerHeight);
    $(window).resize(function() {
      $('.fullscreen .swiper-slide').height(window.innerHeight);
    });

    var mc = $(".swiper-container").data("mousewheel-control");
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      speed: 1000,
      effect: 'slide',
      autoplay: 8000,
      autoplayDisableOnInteraction: false,
      loop: true,
      mousewheelControl: mc,
      grabCursor: true,
      preloadImages: false,
      lazyLoading: true,
      watchSlidesVisibility: true
    });
    $(window).trigger('resize');
  });

  /* Waypoints */
  $('.wd-section-blog-services.style-3').waypoint(function() {
    $('.wd-section-blog-services.style-3').addClass('anim-on');
    $('.wd-section-blog-services.style-3 .wd-blog-post').addClass('nohover');
  },
  { offset: 'bottom-in-view' });

  $('.animated').css('opacity', 0);

  // Add animation delay
  var thisParent = $(this).closest('.animation-parent'),
      animationDelay = thisParent.data('animation-delay');

  $('.animation-parent').each(function(index, element) {
    $('.animated', $(this)).css('opacity', '0');
    if ($(element).data('animation-delay') && $(element).data('animation-delay') != "") {
      var delay = $(element).data('animation-delay') * 1;
      if (delay !== undefined) {
        $(this).addClass('animation-started');
      }
    }
  });
  
});
