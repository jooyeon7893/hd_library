$(function () {
  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });

  $grid.isotope({
    filter: '.talk'
  });
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });

  $('#sect4 ul li').click(function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
    $('#sect4 ul li').removeClass('on')
    $(this).addClass('on')
  });

  $('#sect4 .grid-item').mouseenter(function(){
    $('.txt').hide()
    $(this).find('.txt').fadeIn()
  });

  $('#sect4 .grid-item').mouseleave(function(){
    $('.txt').hide()
  });

  $(window).scroll(function () {
    var top = parseInt($(this).scrollTop())
    $('h5').text(top)
  });

  mouse()
  function mouse() {
    $('section').mousewheel(function (e, delta) {
      if (delta > 0) {
        var prev = $(this).prev().offset().top
        $('html, body').animate({'scrollTop': prev})
      } else if (delta < 0) {
        var next = $(this).next().offset().top
        $('html, body').animate({'scrollTop': next})
      }
      $('section').off('mousewheel')
      replay()
    })
  };
  function replay(){setTimeout(function(){mouse()}, 500)};

  // var link = this;
  // $.smoothScroll({
  //   scrollTarget: link.hash,
  //   easing: 'easeOutSine',
  //   speed: 500
  // });
  
})