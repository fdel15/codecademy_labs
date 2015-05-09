var main = function() {

  $('#top-text').keyup(function(){
    var typedText = $(this).val();
    $('.top-caption').text(typedText);
  });

  $('#bottom-text').keyup(function(){
    var typedText = $(this).val();
    $('.bottom-caption').text(typedText);
  });

  $('#image-url').keyup(function(){
    var typedText = $(this).val();
    $('.thumbnail img').attr('src', typedText);
  });

}

$(document).ready(main);