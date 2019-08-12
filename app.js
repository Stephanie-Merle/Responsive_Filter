
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

// event listener on KEYPRESS, 13 === enter key
$('input').keypress(function(event){
  if(event.which === 13){
    // record the input value into a variable 
    var todoNext = $(this).val();
    // input value and push into the grid element
    $(".notes").append("<div class=\"note grid-item--width3\">" + "<h5 class=\"card-title\">" + "<i class=\"fas fa-check\"></i>" + todoNext + "<span>" + "<i class=\"fas fa-window-close\">" + "</i>" + "</span>" + "</h5>" + "</div>");
    //finally clean the input box;
    $('input[type="text"]').val("");
    // Reload view
    $grid.isotope(); 
  };
}); 

$("ul").on("click" , "li" , function(){
  $(this).toggleClass("selected");
});

// DOM manipulation delete note
// the target of addListener should be an existing element
$('.notes').on('click','span',function() { 
  $(this).parent().remove();
  $grid.isotope(); 
});

// DOM manipulation check note
// the target of addListener should be an existing element
$('.notes').on('click','.fa-check',function() { 
  $(this).toggleClass('checked'); 
  $grid.isotope();
});

// DOM manipulation pictures size
$('.grid-item').click(function() {
  $(this).toggleClass('grid-item');
  $(this).toggleClass('grid-item--width2');
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



