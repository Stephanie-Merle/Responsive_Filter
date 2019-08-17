
 let $grid = $('.grid').isotope({
  masonry: {
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
   }
  });

// DOM manipulation delete NOTE
// the target of addListener should be an existing element
$('.grid').on('click','span',function() { 
  $(this).parent().remove();
  $grid.isotope(); 
});

// DOM manipulation check NOTE
// the target of addListener should be an existing element
$('.grid').on('click','.fa-check',function() { 
  $(this).toggleClass('checked'); 
  $grid.isotope();
});

// Enven listener on Keypress ENTER in NOTE
$('input').keypress(function(event){
  if(event.which === 13){
    // record the input value into a variable 
    let todoNext = $(this).val();
    if(todoNext){   // check if input isn't empty
      let catFilter= $('#custom-cat').val();
      // input value with filter if category selected
      const $items = $('<div class=\"notes grid-item--width3\"><h5 class=\"card-title\"><i class=\"fas fa-check\"></i>' + todoNext + '<span><i class=\"fas fa-window-close\"></i></span></h5></div>').addClass(catFilter);
      // append items to grid
      $grid.append( $items )
        // add and lay out newly appended items
        .isotope( 'appended', $items );
      //finally clean the input box;
      $('input[type="text"]').val('');
    }
  };
  // reload view
  $grid.isotope();
});

//  selected filter button
 $('.btn-menu').click(function() {
 $(this).toggleClass( 'selected' );
  });

// DOM manipulation pictures size
$('.grid-item').click(function() {
  $(this).toggleClass('grid-item');
  $(this).toggleClass('grid-item--width2');
  $grid.isotope(); 
});

// DOM manipulation, filter items on click event from header buttons
$('.filter-button-group').on( 'click', 'button', function() {
  let filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  });

// init Masonry to use imagesLoaded
let $gridm = $('.grid').masonry({
  itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
});

// layout Masonry after each image loads 
$gridm.imagesLoaded().progress( function() {
  $gridm.masonry('layout');
});



