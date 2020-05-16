


$(function() {

  // background-image

var pageSection = $('section, .bg-img')
pageSection.each(function(index){
  if($(this).attr('data-background')){
    $(this).css('background-image','url(' + $(this).data('background') + ')')
  }
})

var $gallery = $('.gallery').isotope({
  // options
});

// filter items on button click
$('.filtering').on( 'click', 'button', function() {

    var filterValue = $(this).attr('data-filter');

    $gallery.isotope({ filter: filterValue });

});

$('.filtering').on( 'click', 'button', function() {

    $(this).addClass('active').siblings().removeClass('active');

});



})


$(document).ready(function(){



 $('.navbar-toggler').click(function(){
   $('.navbar-mobile').toggleClass('show')
 })


$(window).resize(function(){
  if($(window).width() > 990 ){
    $('.navbar-mobile').removeClass('show')
  }
})

$('.close').click(function(){
  $('.navbar-mobile').removeClass('show')
})


$(window).ready(function (){
  $('.owl-item').height($(window).height() - 100 + 'px')

})


  $(".vid").magnificPopup({
    items: {
      src: './videos/hotel.mp4'
    },
    type: 'iframe'
  })

// carousel-slider
  $('.header .owl-carousel').owlCarousel({

    items: 1,
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    smartSpeed:700,
    dots:false,
    nav: true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],


});

})
$(window).on("load", function(){
  // Preloader
  $("#loading").fadeOut(1500);
})
