var main = function() {
    $('.more-btn').click(function(){
      $(this).next().toggle()
    })
};

$(document).ready(main);