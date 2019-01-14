$('.menu .item')
  .tab()
;

$('#zf').css('border-bottom', '2px solid blue');

$('.ui.sticky')
  .sticky({
    context: '#main_container'
  })
;

$('.firmenlogo').bind('mouseover', function(event) {
  $('.review_text').hide();
  $('.firmenlogo').css('border-bottom', '0px solid blue');
  $('#'+event.currentTarget.id).css('border-bottom', '2px solid blue');
  $('.'+event.currentTarget.id).show();
})

$(document).ready(function() {
  $(".test_btn").click(function(){
      alert("Test Button");
  });
  
  $('.contact_btn').click(function(){
      alert("Contact Button");
  });
});