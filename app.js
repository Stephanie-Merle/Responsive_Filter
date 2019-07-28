
 var $grid = $('.grid').isotope({
  masonry: {
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
   }
  });

// DOM manipulation, selected filter
 $('.btn-menu').click(function() {
 $(this).toggleClass( 'selected' );
  });

// DOM manipulation pictures size
$('.grid-item').click(function() {
  $(this).toggleClass('grid-item');
// toggle class depending on the screen size
  if($(window).height() < 760){ 
  $(this).toggleClass('grid-item--width3');
 }else{
  $(this).toggleClass('grid-item--width2');
 }
 // refresh the masonry view
 $grid.isotope(); 
});

// filter items on click event from header buttons
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  });

// init Masonry to use imagesLoaded
var $gridm = $('.grid').masonry({
  itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
});
// layout Masonry after each image loads 
$gridm.imagesLoaded().progress( function() {
  $gridm.masonry('layout');
});