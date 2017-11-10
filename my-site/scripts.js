$(document).ready(function(){
  $('.menu-trigger').click(function(){
     $('nav ul').slideToggle(100);
  });
   $(window).resize(function(){
     if ( $(window).width()>350){
       $('nav ul').removeAttr('style');
     }
   });
});
