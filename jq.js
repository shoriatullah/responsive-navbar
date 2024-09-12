
$('.mobile-nav').hide();
$('.hide').hide();


$('.show').click (function(){
  $('.mobile-nav').slideDown();
  $('.show').hide();
  $('.hide').show();
})


$('.hide').click (function(){
  $('.mobile-nav').slideUp();
  $('.show').show();
  $('.hide').hide();
})




