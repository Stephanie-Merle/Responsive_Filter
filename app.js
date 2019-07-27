
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

// DOM manipulation, photo size
$('.grid-item').click(function() {
  $(this).toggleClass('grid-item');
  $(this).toggleClass( 'grid-item--width2' );
  $grid.isotope();
  });

// filter items on click event from header buttons
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  });
   