$(function () {
  $('.navMenuMobile__navIcon').on('click', function(){         $('.navMenuMobile__content').toggleClass('navMenuMobile__content--expand');
});
    $(".content-banner").height( ($(window).height()*.9) );  
    $(".inspiration-banner").height(($(window).height()*.7));  
    $(".bottomBucket").height( ($(window).height()*.5)); 
});


//
//$(function () {
//    var document = $(document).width();
//    if (document <= 1060) {
//        $("#navMenu__right__input").click(function(){
//        $("#navMenu__left__create").hide()
//        });
//
//        $("#navMenu__right__input").focusout(function(){
//        $("#navMenu__left__create").show()
//        });
//    }
//});

