var main = function(){
  $(".dropdown").click(function(){
    $(this).siblings().children(".dropdown-menu").hide()
  $(this).children(".dropdown-menu").toggle();
  })
};

$(document).ready(main)