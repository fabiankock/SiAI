$('.menu .item')
  .tab()
;

$('.ui.sticky')
  .sticky({
    context: '#main_container'
  })
;

$('.firmenlogo').bind('mouseover', function(event) {
  $('.review_text').hide();
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