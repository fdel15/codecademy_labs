var main = function() {

$('.day').click(function(){
  $(this).next().toggle();
  // make that plus toggle
  $(this).find('.glyphicon-plus').toggleClass('glyphicon-minus');
});


};

$(document).ready(main);