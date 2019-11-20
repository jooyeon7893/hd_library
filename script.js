$(function(){
  

  var swiper = new Swiper('.swiper-container',{
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
    masonry: {columnWidth: '.grid-sizer'}
  });

  $grid.isotope({filter: '.talk'});
  $grid.imagesLoaded().progress(function(){$grid.isotope('layout');});

  $('#sect4 ul li').click(function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  })
})